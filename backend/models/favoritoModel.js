const db = require("../config/dbMySQL");

const agregarFavorito = async (userId, recetaId) => {
  try {
    const [resultado] = await db.query(
      "INSERT INTO favoritos (usuario_id, receta_id) VALUES (?, ?)",
      [userId, recetaId]
    );
    return resultado;
  } catch (error) {
    console.error("Error en agregarFavorito:", error);
    throw error;
  }
};

const obtenerFavoritos = async (userId) => {
  try {
    const [favoritos] = await db.query(
      "SELECT r.* FROM recetas r JOIN favoritos f ON r.id = f.receta_id WHERE f.usuario_id = ?",
      [userId]
    );
    return favoritos;
  } catch (error) {
    console.error("Error en obtenerFavoritos:", error);
    throw error;
  }
};

const eliminarFavorito = async (userId, recetaId) => {
  try {
    const [resultado] = await db.query(
      "DELETE FROM favoritos WHERE usuario_id = ? AND receta_id = ?",
      [userId, recetaId]
    );
    return resultado;
  } catch (error) {
    console.error("Error en eliminarFavorito:", error);
    throw error;
  }
};

const esFavorito = async (userId, recetaId) => {
  try {
    const [resultado] = await db.query(
      "SELECT COUNT(*) as count FROM favoritos WHERE usuario_id = ? AND receta_id = ?",
      [userId, recetaId]
    );
    return resultado[0].count > 0;
  } catch (error) {
    console.error("Error en esFavorito:", error);
    throw error;
  }
};

module.exports = {
  agregarFavorito,
  obtenerFavoritos,
  eliminarFavorito,
  esFavorito,
};
