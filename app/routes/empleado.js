const express = require('express-promise-router');
const empleado = require('../controllers/empleado')

const empleadoRouter = () => {
    const router = express.default()

    router.post('/', empleado.create)
    router.get('/', empleado.getAll)

    return router
}

module.exports = empleadoRouter;