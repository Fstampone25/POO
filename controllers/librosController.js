const Libro = require("../models/Libro")

exports.obtenerLibros = async (req, res) => {
  const libros = await Libro.findAll()
  res.json(libros)
}

exports.obtenerLibroPorId = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id)

  if (!libro) {
    return res.status(404).json({
      error: "Libro no encontrado"
    })
  }

  res.json(libro)
}

exports.crearLibro = async (req, res) => {
  try {
    const libro = await Libro.create(req.body)

    res.status(201).json(libro)

  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

exports.actualizarLibro = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id)

  if (!libro) {
    return res.status(404).json({
      error: "Libro no encontrado"
    })
  }

  await libro.update(req.body)

  res.json(libro)
}

exports.eliminarLibro = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id)

  if (!libro) {
    return res.status(404).json({
      error: "Libro no encontrado"
    })
  }

  await libro.destroy()

  res.json({
    mensaje: "Libro eliminado"
  })
}