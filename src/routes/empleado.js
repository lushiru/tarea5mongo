const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const empleadoController = require("../controllers/empleadoController");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads")); // Directorio donde se guardan los archivos subidos
  },
  filename: function (req, file, cb) {
    //cb(null, file.originalname); // Nombre original del archivo subido
    //cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Ruta para mostrar todos los personajes
router.get("/", empleadoController.todosEmpleados);



// Ruta para mostrar el formulario
router.get("/crear", (req, res) => {
  res.render("formulario", { layout: "layouts/main" });
});

// Ruta para manejar la creación de un nuevo personaje
router.post("/crear", upload.single("imagen"), empleadoController.crearEmpleado);

//mostror formulario actualizar
router.get("/actualizar/:id", empleadoController.formularioEmpleado);

router.post("/actualizar/:id", upload.single("imagen") , empleadoController.actualizandoEmpleado);

router.get("/eliminar/:id", empleadoController.eliminarEmpleado);

module.exports = router;