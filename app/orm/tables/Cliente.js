const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Cliente = sequelize.define('Cliente', {
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    direccion:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    colonia:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cp:{
        type: DataTypes.INTEGER(5),
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    contraseña:{
        type: DataTypes.STRING(64),
        allowNull: false
    }
})

module.exports = Cliente
