const express = require("express")
const router = express.Router()

const Prestamo = require("../models/Prestamo")
const Libro = require("../models/Libro")
const Socio = require("../models/Socio")

// GET todos los prestamos
router.get("/", async (req, res) => {

  const prestamos = await Prestamo.findAll({
    include: [Libro, Socio]
  })

  res.json(prestamos)

})

// GET prestamo por ID
router.get("/:id", async (req, res) => {

  const prestamo = await Prestamo.findByPk(req.params.id, {
    include: [Libro, Socio]
  })

  if (!prestamo) {
    return res.status(404).json({
      error: "Prestamo no encontrado"
    })
  }

  res.json(prestamo)

})

// POST crear prestamo
router.post("/", async (req, res) => {

  try {

    const { socioId, libroId } = req.body

    const socio = await Socio.findByPk(socioId)
    const libro = await Libro.findByPk(libroId)

    // validar socio
    if (!socio) {
      return res.status(404).json({
        error: "Socio no encontrado"
      })
    }

    // validar libro
    if (!libro) {
      return res.status(404).json({
        error: "Libro no encontrado"
      })
    }

    // socio bloqueado
    if (socio.bloqueado) {
      return res.status(400).json({
        error: "Socio bloqueado"
      })
    }

    // maximo 3 prestamos
    const prestamosActivos = await Prestamo.count({
      where: {
        SocioId: socioId,
        activo: true
      }
    })

    if (prestamosActivos >= 3) {
      return res.status(400).json({
        error: "El socio ya tiene 3 prestamos activos"
      })
    }

    // validar stock
    if (libro.stock <= 0) {
      return res.status(400).json({
        error: "No hay stock disponible"
      })
    }

    // crear prestamo
    const prestamo = await Prestamo.create({
      SocioId: socioId,
      LibroId: libroId
    })

    // descontar stock
    libro.stock -= 1
    await libro.save()

    res.status(201).json(prestamo)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

// DEVOLVER libro
router.put("/:id/devolver", async (req, res) => {

  try {

    const prestamo = await Prestamo.findByPk(req.params.id)

    if (!prestamo) {
      return res.status(404).json({
        error: "Prestamo no encontrado"
      })
    }

    if (!prestamo.activo) {
      return res.status(400).json({
        error: "El libro ya fue devuelto"
      })
    }

    const libro = await Libro.findByPk(prestamo.LibroId)

    // actualizar prestamo
    prestamo.activo = false
    prestamo.fechaDevolucion = new Date()

    await prestamo.save()

    // devolver stock
    libro.stock += 1
    await libro.save()

    res.json({
      mensaje: "Libro devuelto correctamente"
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

// DELETE prestamo
router.delete("/:id", async (req, res) => {

  const prestamo = await Prestamo.findByPk(req.params.id)

  if (!prestamo) {
    return res.status(404).json({
      error: "Prestamo no encontrado"
    })
  }

  await prestamo.destroy()

  res.json({
    mensaje: "Prestamo eliminado"
  })

})

module.exports = router