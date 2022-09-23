const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const PedidoClie = sequelize.define('PedidoClie', {
    fechEnt:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    estatus:{
        type: DataTypes.ENUM('pendiente','finalizado','cancelado'),
        allowNull: false
    },
    envio:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.INTEGER(100),
        allowNull: false
    }
})

module.exports = PedidoClie