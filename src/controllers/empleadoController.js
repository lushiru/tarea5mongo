const Empleado = require("../models/empleado");

const todosEmpleados = async (req, res) => {
    try {
      const empleados = await Empleado.find(); // Obtener todos los personajes de la base de datos
      res.render("empleados", { layout: "layouts/main", empleados }); // Renderizar la vista 'personajes.hbs' con los datos obtenidos
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
      res.status(500).send("Hubo un error al obtener los empleados");
    }
  }


  const crearEmpleado = async (req, res) => {
    const { nombre, edad, rol } = req.body;
    let imagenPath="";
    if(req.file.path){
      imagenPath = req.file.filename; // Ruta de la imagen guardada en el servidor
    }  
  
    try {
      const nuevoEmpleado = new Empleado({
        nombre,
        edad: parseInt(edad),
        rol,
        imagen: imagenPath, // Guardamos la ruta de la imagen en la base de datos
      });
      await nuevoEmpleado.save();
      res.render("crear", { layout: "layouts/main", title: "Inicio", message: "creardo correctamente", });
    } catch (error) {
      console.error("Error al crear el Empleado:", error);
      res.status(500).send("Hubo un error al crear el Empleado");
    }
  }

  const formularioEmpleado = async (req, res) => {
    try {
      const empleado = await Empleado.findById(req.params.id); // Obtener todos los personajes de la base de datos
      res.render("formularioActualizar", { layout: "layouts/main", empleado }); // Renderizar la vista 'personajes.hbs' con los datos obtenidos
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
      res.status(500).send("Hubo un error al obtener los empleados");
    }
  }

  const actualizandoEmpleado = async (req, res) => {
    const { nombre, edad, rol } = req.body;
    
    const imagenPath = req.file ? req.file.filename : ''; 
  
    try {
      await Empleado.findByIdAndUpdate(req.params.id, {
        nombre,
        edad: parseInt(edad),
        rol,
        imagen: imagenPath
      });
      res.redirect("/empleado")
    } catch (error) {
      console.error("Error al crear el Empleado:", error);
      res.status(500).send("Hubo un error al crear el Empleado");
    }
  }

  const eliminarEmpleado = async (req, res) => {
    try {
      await Empleado.findByIdAndDelete(req.params.id)
      res.redirect("/empleado")
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
      res.status(500).send("Hubo un error al obtener los empleados");
    }
  }
  module.exports = {
    todosEmpleados,
    crearEmpleado,
    formularioEmpleado,
    actualizandoEmpleado,
    eliminarEmpleado
  };