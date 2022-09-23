const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Categoria = sequelize.define('Categoria', {
    nombre:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

module.exports = Categoria