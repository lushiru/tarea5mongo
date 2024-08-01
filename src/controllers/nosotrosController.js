const nosotrosTodos = async (req, res) => {
    try {
      //const empleados = await Empleado.find(); // Obtener todos los personajes de la base de datos
      res.render("nosotros", { layout: "layouts/main" , title: "Nosotros", message: "Lista de Nosotros Estudiantes", }); // Renderizar la vista 'personajes.hbs' con los datos obtenidos
    } catch (error) {
      console.error("Error al obtener render:", error);
      res.status(500).send("Hubo un error");
    }
  }

  module.exports = {
    nosotrosTodos,
  }