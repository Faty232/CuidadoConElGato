const express = require('express-promise-router');
const marca = require('../controllers/marca')

const marcaRouter = () => {
    const router = express.default()

    router.post('/', marca.create)
    router.get('/', marca.getAll)
    router.put('/:id', marca.update)
    router.delete('/:id', marca.delete)

    return router
}

module.exports = marcaRouter;