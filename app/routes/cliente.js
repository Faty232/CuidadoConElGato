const express = require('express-promise-router');
const cliente = require('../controllers/cliente')

const clienteRouter = () => {
    const router = express.default()

    router.post('/', cliente.create)
    router.get('/', cliente.getAll)
    router.put('/:id', cliente.update)
    router.delete('/:id', cliente.delete)

    return router
}

module.exports = clienteRouter;