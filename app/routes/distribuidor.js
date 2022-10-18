const express = require('express-promise-router');
const distribuidor = require('../controllers/distribuidor')

const distribuidorRouter = () => {
    const router = express.default()

    router.post('/', distribuidor.create)
    router.get('/', distribuidor.getAll)
    router.put('/:id', distribuidor.update)
    router.get('/:id', distribuidor.getById)
    router.delete('/:id', distribuidor.delete)

    return router
}

module.exports = distribuidorRouter;