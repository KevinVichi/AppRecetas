const db = require("../config/dbMySQL");

const obtenerUsuarioPorCorreo = async (correo) => {
  try {
    const [usuarios] = await db.query(
      "SELECT * FROM usuarios WHERE correo = ?",
      [correo]
    );
    return usuarios[0];
  } catch (error) {
    console.error("Error en obtenerUsuarioPorCorreo:", error);
    throw error;
  }
};

const crearUsuario = async (nombre, correo, contrasenia) => {
  try {
    const [resultado] = await db.query(
      "INSERT INTO usuarios (nombre, correo, contrasenia) VALUES (?, ?, ?)",
      [nombre, correo, contrasenia]
    );
    return resultado;
  } catch (error) {
    console.error("Error en crearUsuario:", error);
    throw error;
  }
};

module.exports = { obtenerUsuarioPorCorreo, crearUsuario };
