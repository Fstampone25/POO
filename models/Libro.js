const { DataTypes } = require("sequelize")
const sequelize = require("../database")

const Libro = sequelize.define("Libro", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
})

module.exports = Libro