const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const recetasRoutes = require("./routes/recetaRoute");
const {
  router: usuarioRoutes,
  verificarToken,
} = require("./routes/usuarioRoute");
const favoritosRoutes = require("./routes/favoritoRoute");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/recetas", recetasRoutes);
app.use("/api/favoritos", verificarToken, favoritosRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
