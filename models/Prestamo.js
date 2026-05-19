const { DataTypes } = require("sequelize")
const sequelize = require("../database")
const Libro = require("./Libro")
const Socio = require("./Socio")
const Prestamo = sequelize.define("Prestamo", {
fechaPrestamo: {
type: DataTypes.DATE,
defaultValue: DataTypes.NOW
},
fechaDevolucion: {
type: DataTypes.DATE,
allowNull: true
},
activo: {
type: DataTypes.BOOLEAN,
defaultValue: true
}
})
Socio.hasMany(Prestamo)
Prestamo.belongsTo(Socio)
Libro.hasMany(Prestamo)
Prestamo.belongsTo(Libro)
3
module.exports = Prestamo