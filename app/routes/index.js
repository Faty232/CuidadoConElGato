const express = require('express-promise-router'); //Manejar las rutas(url)
const empleadoRouter = require('./empleado');
const categoriaRouter = require('./categoria');
const marcaRouter = require('./marca');
const distribuidorRouter = require('./distribuidor');
const proveedorRouter = require('./proveedor');
const tipoPrendaRouter = require('./tipoPrenda');
const clienteRouter = require('./cliente');
const almacenRouter = require('./almacen');
const productoRouter = require('./producto');
const direEntRouter = require('./direEnt');
const pedidoClieRouter = require('./pedidoClie');
const devolucionRouter = require('./devolucion');
console.log(process.env.NAME_DB);

function routerApi(app){
    const router = express.default() //Sirve para crear las rutas
    app.use('/api', router)

    router.use('/empleado', empleadoRouter());
    router.use('/categoria', categoriaRouter());
    router.use('/marca', marcaRouter());
    router.use('/distribuidor', distribuidorRouter());
    router.use('/proveedor', proveedorRouter());
    router.use('/tipoPrenda', tipoPrendaRouter());
    router.use('/cliente', clienteRouter());
    router.use('/almacen', almacenRouter());
    router.use('/producto', productoRouter());
    router.use('/direEnt', direEntRouter());
    router.use('/pedidoClie', pedidoClieRouter());
    router.use('/devolucion', devolucionRouter());

    return router
}

module.exports = routerApi