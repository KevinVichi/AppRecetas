const express = require("express");
const router = express.Router();
const {
  obtenerRecetas,
  crearReceta,
  obtenerCategorias,
  obtenerRecetasPorCategoria,
  obtenerRecetaPorId,
} = require("../models/recetaModel");

router.get("/", async (req, res) => {
  try {
    const { categoria } = req.query;
    let recetas;
    if (categoria) {
      recetas = await obtenerRecetasPorCategoria(categoria);
    } else {
      recetas = await obtenerRecetas();
    }
    res.json(recetas);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al obtener recetas" });
  }
});

// Ruta para obtener categorías
router.get("/categorias", async (req, res) => {
  try {
    const categorias = await obtenerCategorias();
    res.json(categorias);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al obtener categorías" });
  }
});

// Ruta para obtener receta por id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const receta = await obtenerRecetaPorId(id);
    if (receta) {
      res.json(receta);
    } else {
      res.status(404).json({ error: "Receta no encontrada" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al obtener receta" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      titulo,
      categoria,
      ingredientes,
      descripcion,
      tiempoPreparacion,
      pasos,
      imagenUrl,
    } = req.body;
    const nuevaReceta = await crearReceta(
      titulo,
      categoria,
      ingredientes,
      descripcion,
      tiempoPreparacion,
      pasos,
      imagenUrl
    );
    res.status(201).json(nuevaReceta);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al crear receta" });
  }
});

module.exports = router;
