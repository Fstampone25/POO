const express = require("express")
const router = express.Router()
const Libro = require("../models/Libro")
router.get("/", async (req, res) => {
const libros = await Libro.findAll()
res.json(libros)
})
router.get("/:id", async (req, res) => {
const libro = await Libro.findByPk(req.params.id)
if (!libro) {
return res.status(404).json({
error: "Libro no encontrado"
})
}
res.json(libro)
})
router.post("/", async (req, res) => {
try {
const libro = await Libro.create(req.body)
res.status(201).json(libro)
} catch (error) {
res.status(400).json({
error: error.message
})
}
})
router.put("/:id", async (req, res) => {
const libro = await Libro.findByPk(req.params.id)
if (!libro) {
return res.status(404).json({
error: "Libro no encontrado"
})
}
await libro.update(req.body)
4
res.json(libro)
})
router.delete("/:id", async (req, res) => {
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
})
module.exports = router