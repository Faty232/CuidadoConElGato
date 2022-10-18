const express = require('express-promise-router');
const producto = require('../controllers/producto')

const productoRouter = () => {
    const router = express.default()

    router.post('/', producto.create)
    router.get('/', producto.getAll)
    router.get('/:id', producto.getById)
    router.put('/:id', producto.update)
    router.delete('/:id', producto.delete)

    return router
}

module.exports = productoRouter;