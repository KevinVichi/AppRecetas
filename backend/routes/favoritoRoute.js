const express = require("express");
const router = express.Router();
const {
  agregarFavorito,
  obtenerFavoritos,
  eliminarFavorito,
  esFavorito,
} = require("../models/favoritoModel");
const { verificarToken } = require("./usuarioRoute");

router.post("/", verificarToken, async (req, res) => {
  try {
    const { recetaId } = req.body;
    const userId = req.userId;
    const nuevoFavorito = await agregarFavorito(userId, recetaId);
    res.status(201).json(nuevoFavorito);
  } catch (error) {
    console.error("Error al agregar favorito:", error);
    res.status(500).json({ error: "Error al agregar favorito" });
  }
});

router.get("/", verificarToken, async (req, res) => {
  try {
    const userId = req.userId;
    const favoritos = await obtenerFavoritos(userId);
    res.json(favoritos);
  } catch (error) {
    console.error("Error al obtener favoritos:", error);
    res
      .status(500)
      .json({ error: `Error al obtener favoritos: ${error.message}` });
  }
});

router.delete("/", verificarToken, async (req, res) => {
  try {
    const { recetaId } = req.body;
    const userId = req.userId;
    const resultado = await eliminarFavorito(userId, recetaId);
    res.status(200).json({ message: "Favorito eliminado" });
  } catch (error) {
    console.error("Error al eliminar favorito:", error);
    res.status(500).json({ error: "Error al eliminar favorito" });
  }
});

router.get("/check/:recetaId", verificarToken, async (req, res) => {
  try {
    const { recetaId } = req.params;
    const userId = req.userId;
    const resultado = await esFavorito(userId, recetaId);
    res.json(resultado);
  } catch (error) {
    console.error("Error al verificar favorito:", error);
    res.status(500).json({ error: "Error al verificar favorito" });
  }
});

module.exports = router;
