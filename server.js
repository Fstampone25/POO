require("dotenv").config()

const express = require("express")
const cors = require("cors")

const sequelize = require("./config/database")

require("./models/Libro")
require("./models/Socio")
require("./models/Prestamo")

const librosRoutes = require("./routes/libros")
const sociosRoutes = require("./routes/socios")
const prestamosRoutes = require("./routes/prestamos")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/libros", librosRoutes)
app.use("/socios", sociosRoutes)
app.use("/prestamos", prestamosRoutes)

sequelize.sync().then(() => {
  console.log("Base de datos conectada")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})

