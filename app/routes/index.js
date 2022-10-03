const express = require('express-promise-router'); //Manejar las rutas(url)
const empleadoRouter = require('./empleado');
const categoriaRouter = require('./categoria');
console.log(process.env.NAME_DB);

function routerApi(app){
    const router = express.default() //Sirve para crear las rutas
    app.use('/api', router)

    router.use('/empleado', empleadoRouter());
    router.use('/categoria', categoriaRouter())

    return router
}

module.exports = routerApi