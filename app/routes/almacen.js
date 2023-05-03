const express = require('express-promise-router');
const almacen = require('../controllers/almacen')

const almacenRouter = () => {
    const router = express.default()

    router.post('/', almacen.create)
    router.get('/', almacen.getAll)
    router.get('/:id', almacen.getById)
    router.put('/:id', almacen.update)
    router.delete('/:id', almacen.delete)

    return router
}

module.exports = almacenRouter;