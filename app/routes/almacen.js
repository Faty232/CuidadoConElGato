const express = require('express-promise-router');
const almacen = require('../controllers/almacen')

const almacenRouter = () => {
    const router = express.default()

    router.post('/', almacen.create)

    return router
}

module.exports = almacenRouter;