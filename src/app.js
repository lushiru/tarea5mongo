
const express = require("express");
const connectDB = require("./config/db"); // Importar la función connectDB para la conexión a MongoDB
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const hbs = require("hbs");
//const uploadRouter = require("./routes/uploadRoutes"); // Importa el router de upload
const empleadoRouter = require("./routes/empleado");
const nosotrosRouter = require("./routes/nosotros");

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos MongoDB
connectDB();

// Configurar Handlebars como motor de plantillas
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Middleware para manejar rutas de carga de archivos
//app.use("/upload", uploadRouter);

// Middleware para manejar rutas relacionadas con los personajes
app.use("/empleado", empleadoRouter);

app.use("/nosotros", nosotrosRouter);

// Ruta principal
app.get("/", (req, res) => {
  res.render("index", {
    layout: "layouts/main",
    title: "Inicio",
    message: "Bienvenidos a nuestra aplicación",
  });
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).render("error404", { title: "Página no encontrada" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});