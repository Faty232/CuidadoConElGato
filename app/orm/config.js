//Conexión a la base de datos
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('tienda', 'root', '2215', { //new creando un objeto
    host: 'localhost',
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