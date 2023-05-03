const express = require('express-promise-router');
const proveedor = require('../controllers/proveedor')

const proveedorRouter = () => {
    const router = express.default()

    router.post('/', proveedor.create)
    router.get('/', proveedor.getAll)
    router.get('/:id', proveedor.getById)
    router.put('/:id', proveedor.update)
    router.delete('/:id', proveedor.delete)

    return router
}

module.exports = proveedorRouter;