//Conexión a la base de datos
const {Sequelize} = require("sequelize");

console.log(process.env.NAME_DB);
console.log(process.env.USER_DB);
console.log(process.env.PASSWORD_DB);
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB || "" ,{ //new creando un objeto
    host: process.env.HOST_DB ,
    port: process.env.PORT_DB,
    dialect: 'mysql'
});

//Realiza la conexión a la base de datos
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
     //then es como el try cath
}).catch((error) =>{ // => hacer una función
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize