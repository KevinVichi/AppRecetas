const express = require("express");
const router = express.Router();
const {
  obtenerUsuarioPorCorreo,
  crearUsuario,
} = require("../models/usuarioModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secretKey = "123"; // Cambia esto por una clave secreta segura

router.post("/login", async (req, res) => {
  try {
    const { correo, contrasenia } = req.body;
    const usuario = await obtenerUsuarioPorCorreo(correo);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (!usuario.contrasenia) {
      return res
        .status(400)
        .json({ error: "Contraseña no definida para el usuario" });
    }

    const esContraseñaValida = await bcrypt.compare(
      contrasenia,
      usuario.contrasenia
    );

    if (!esContraseñaValida) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: usuario.id }, secretKey, { expiresIn: "1h" });

    res.json({ token, nombre: usuario.nombre });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { nombre, correo, contrasenia } = req.body;
    const hashedContraseña = await bcrypt.hash(contrasenia, 10);
    const nuevoUsuario = await crearUsuario(nombre, correo, hashedContraseña);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error en register:", error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

router.post("/logout", (req, res) => {
  res.json({ message: "Sesión cerrada" });
});

const verificarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ error: "No se proporcionó un token" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "No se proporcionó un token" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido" });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { router, verificarToken };
