const Socio = require("../models/Socio")

exports.obtenerSocios = async (req, res) => {

  const socios = await Socio.findAll()

  res.json(socios)

}

exports.obtenerSocioPorId = async (req, res) => {

  const socio = await Socio.findByPk(req.params.id)

  if (!socio) {
    return res.status(404).json({
      error: "Socio no encontrado"
    })
  }

  res.json(socio)

}

exports.crearSocio = async (req, res) => {

  try {

    const socio = await Socio.create(req.body)

    res.status(201).json(socio)

  } catch (error) {

    res.status(400).json({
      error: error.message
    })

  }

}

exports.actualizarSocio = async (req, res) => {

  const socio = await Socio.findByPk(req.params.id)

  if (!socio) {
    return res.status(404).json({
      error: "Socio no encontrado"
    })
  }

  await socio.update(req.body)

  res.json(socio)

}

exports.eliminarSocio = async (req, res) => {

  const socio = await Socio.findByPk(req.params.id)

  if (!socio) {
    return res.status(404).json({
      error: "Socio no encontrado"
    })
  }

  await socio.destroy()

  res.json({
    mensaje: "Socio eliminado"
  })

}