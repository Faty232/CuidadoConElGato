const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Producto = sequelize.define('Producto', {
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    color:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    talla:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    precio:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estatus:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    cantidad:{
        type: DataTypes.INTEGER(100),
        allowNull: false
    }
})

module.exports = Producto