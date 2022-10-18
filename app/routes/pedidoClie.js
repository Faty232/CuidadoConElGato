const express = require('express-promise-router');
const pedidoClie = require('../controllers/pedidoClie')

const pedidoClieRouter = () => {
    const router = express.default()

    router.post('/', pedidoClie.create)
    router.get('/', pedidoClie.getAll)
    router.get('/:id', pedidoClie.getById)
    router.put('/:id', pedidoClie.update)
    router.delete('/:id', pedidoClie.delete)

    return router
}

module.exports = pedidoClieRouter;