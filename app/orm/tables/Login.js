const {DataTypes } = require('sequelize');//Hacer base de datos
const sequelize = require('../config')

const Login = sequelize.define('Login', {
    token:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    fechCad:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})

module.exports = Login
    