const express = require('express-promise-router');
const empleado = require('../controllers/empleado')

const empleadoRouter = () => {
    const router = express.default()

    router.post('/', empleado.create)
    router.get('/', empleado.getAll)
    router.get('/:id', empleado.getById) //:id enviar parametros por medio de la url
    router.patch('/:id', empleado.update)
    return router
}

module.exports = empleadoRouter;