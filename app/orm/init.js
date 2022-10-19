//Creación de la base de datos
require('dotenv').config();
const sequelize = require('./config')

require('./tables') //Usando directamente la carpeta

sequelize.sync({alter: true}).then(() =>{ 
    console.log('La base de datos se creo correctamente');
}).catch((error) =>{
    console.log('Ha ocurrido un error: ', error);
});

