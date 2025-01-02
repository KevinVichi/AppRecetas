const db = require("../config/dbMySQL");

const obtenerRecetas = async () => {
  try {
    const [recetas] = await db.query("SELECT * FROM recetas");
    return recetas;
  } catch (error) {
    console.error("Error en obtenerRecetas:", error);
    throw error;
  }
};

const crearReceta = async (
  titulo,
  categoria,
  ingredientes,
  descripcion,
  tiempoPreparacion,
  pasos,
  imagenUrl
) => {
  try {
    const [resultado] = await db.query(
      "INSERT INTO recetas (titulo, categoria, ingredientes, descripcion, tiempo_preparacion, pasos, imagen_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        titulo,
        categoria,
        ingredientes,
        descripcion,
        tiempoPreparacion,
        pasos,
        imagenUrl,
      ]
    );
    return resultado;
  } catch (error) {
    console.error("Error en crearReceta:", error);
    throw error;
  }
};

const obtenerCategorias = async () => {
  try {
    const [categorias] = await db.query(
      "SELECT DISTINCT categoria FROM recetas"
    );
    return categorias;
  } catch (error) {
    console.error("Error en obtenerCategorias:", error);
    throw error;
  }
};

const obtenerRecetasPorCategoria = async (categoria) => {
  try {
    const [recetas] = await db.query(
      "SELECT * FROM recetas WHERE categoria = ?",
      [categoria]
    );
    return recetas;
  } catch (error) {
    console.error("Error en obtenerRecetasPorCategoria:", error);
    throw error;
  }
};

const obtenerRecetaPorId = async (id) => {
  try {
    const [resultado] = await db.query(
      `SELECT 
        id, 
        titulo, 
        categoria, 
        descripcion, 
        tiempo_preparacion, 
        REPLACE(
          REPLACE(
            REPLACE(ingredientes, '\\\\n', '\n'),
            '\r\n', '\n'
          ),
        '\n', '<br>'
        ) as ingredientes,
        REPLACE(
          REPLACE(
            REPLACE(pasos, '\\\\n', '\n'),
            '\r\n', '\n'
          ),
        '\n', '<br>'
        ) as pasos,
        imagen_url 
      FROM recetas 
      WHERE id = ?`,
      [id]
    );
    return resultado[0];
  } catch (error) {
    console.error("Error al obtener receta:", error);
    throw error;
  }
};

module.exports = {
  obtenerRecetas,
  crearReceta,
  obtenerCategorias,
  obtenerRecetasPorCategoria,
  obtenerRecetaPorId,
};
