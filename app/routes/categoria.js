const express = require('express-promise-router');
const categoria = require('../controllers/categoria')

const categoriaRouter = () => {
    const router = express.default()

    router.post('/', categoria.create)
    router.get('/', categoria.getAll)
    router.put('/:id', categoria.update)
    router.delete('/:id', categoria.delete)

    return router
}

module.exports = categoriaRouter;