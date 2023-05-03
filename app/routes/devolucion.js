const express = require('express-promise-router');
const devolucion = require('../controllers/devolucion')

const devolucionRouter = () => {
    const router = express.default()

    router.post('/', devolucion.create)
    router.get('/', devolucion.getAll)
    router.get('/:id', devolucion.getById)
    router.put('/:id', devolucion.update)
    router.delete('/:id', devolucion.delete)

    return router
}

module.exports = devolucionRouter;