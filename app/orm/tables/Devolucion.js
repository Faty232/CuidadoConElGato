const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Devolucion = sequelize.define('Devolucion', {
    estatus:{
        type: DataTypes.ENUM('pendiente','devuelto','rechazado'),
        allowNull: false
    },
    motivo:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cantidad:{
        type: DataTypes.INTEGER(100),
        allowNull: false
    },
    total:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Devolucion