const express = require('express-promise-router');
const tipoPrenda = require('../controllers/tipoPrenda')

const tipoPrendaRouter = () => {
    const router = express.default()

    router.post('/', tipoPrenda.create)
    router.get('/', tipoPrenda.getAll)
    router.put('/:id', tipoPrenda.update)
    router.delete('/:id', tipoPrenda.delete)

    return router
}

module.exports = tipoPrendaRouter;