const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const Almacen = sequelize.define('Almacen', {
    existencias:{
        type: DataTypes.INTEGER(100),
        allowNull: false
    }
})

module.exports = Almacen