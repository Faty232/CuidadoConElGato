var express = require('express'); //Llamamos a Express
var app = express();
var bodyparser =('body-parser'); //Se pueda mandar información por el body

var port = process.env.PORT || 8888 //Establecer el puesto que queremos utilizar

//Configuración del body parser
app.use(express.urlencoded())
app.use(express.json())

//Indicar donde estan mis rutas
const router = require('./routes');
app.use('/api', router) 

//Verificar si esta funcionando express
app.listen(port, () => {
    console.log('Server is running on port', port)
})