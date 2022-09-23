const {DataTypes } = require('sequelize');//Hacer base de datos
const sequelize = require('../config')

const Empleado = sequelize.define('Empleado', {
    nombre:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    edad:{
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
    },
    administrador:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
    direccion:{
        type: DataTypes.STRING(100),
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
        allowNull: true
    },
    telefono:{
        type: DataTypes.STRING(10),
        allowNull: true
    },
    contraseña:{
        type: DataTypes.STRING(64),
        allowNull: false
    }
})

module.exports = Empleado
