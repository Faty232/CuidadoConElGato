const { DataTypes } = require('sequelize');
const sequelize = require('../config')

const DireEnt = sequelize.define('DireEnt', {
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
    }
})

module.exports = DireEnt