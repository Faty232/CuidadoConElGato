const express = require('express'); //Llamamos a Express
const routerApi = require('./routes'); //Indicar donde estan mis rutas
const app = express();
const port = process.env.PORT || 8888 //Establecer el puesto que queremos utilizar

//Configuración del body parser
app.use(express.urlencoded())
app.use(express.json())

//Obteniendo el localhost
app.get('/',(req,res) =>{
    res.send('Servidor de express')
})

routerApi(app) //Pasando como parametro

//Verificar si esta funcionando express
app.listen(port, () => {
    console.log('Server is running on port', port)
})