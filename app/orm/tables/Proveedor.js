const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Proveedor = sequelize.define('Proveedor', {
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    municipio:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

module.exports = Proveedor