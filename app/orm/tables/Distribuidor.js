const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Distribuidor = sequelize.define('Distribuidor', {
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    municipio:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cp:{
        type: DataTypes.INTEGER(5),
        allowNull: false
    },
    fechEnt:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = Distribuidor