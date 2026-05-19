const express = require("express")
const router = express.Router()

const Socio = require("../models/Socio")

// GET todos los socios
router.get("/", async (req, res) => {

  const socios = await Socio.findAll()

  res.json(socios)

})

// GET socio por ID
router.get("/:id", async (req, res) => {

  const socio = await Socio.findByPk(req.params.id)

  if (!socio) {
    return res.status(404).json({
      error: "Socio no encontrado"
    })
  }

  res.json(socio)

})

// POST crear socio
router.post("/", async (req, res) => {

  try {

    const socio = await Socio.create(req.body)

    res.status(201).json(socio)

  } catch (error) {

    res.status(400).json({
      error: error.message
    })

  }

})

// PUT actualizar socio
router.put("/:id", async (req, res) => {

  const socio = await Socio.findByPk(req.params.id)

  if (!socio) {
    return res.status(404).json({
      error: "Socio no encontrado"
    })
  }

  await socio.update(req.body)

  res.json(socio)

})

// DELETE eliminar socio
router.delete("/:id", async (req, res) => {

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

})

module.exports = router