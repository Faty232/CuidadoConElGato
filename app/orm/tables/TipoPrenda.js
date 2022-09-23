const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const TipoPrenda = sequelize.define('TipoPrenda', {
    nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genero:{
        type: DataTypes.ENUM('M','F','U'),
        allowNull: false
    },
    temporada:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
})

module.exports = TipoPrenda