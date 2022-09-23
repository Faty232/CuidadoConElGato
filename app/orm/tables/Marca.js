const {DataTypes } = require('sequelize');//Hacer base de datos
const sequelize = require('../config')

const Marca = sequelize.define('Marca', {
    nombre:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
})

module.exports = Marca