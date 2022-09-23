const express = require('express-promise-router'); //Manejar las rutas(url)
const empleadoRouter = require('./empleado');

function routerApi(app){
    const router = express.default() //Sirve para crear las rutas
    app.use('/api', router)

    router.use('/empleado', empleadoRouter());

    return router
}

module.exports = routerApi