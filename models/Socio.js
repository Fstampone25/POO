const { DataTypes } = require("sequelize")
const sequelize = require("../database")

const Socio = sequelize.define("Socio", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bloqueado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Socio