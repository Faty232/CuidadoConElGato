const express = require('express-promise-router');
const direEnt = require('../controllers/direEnt')

const direEntRouter = () => {
    const router = express.default()

    router.post('/', direEnt.create)
    router.get('/', direEnt.getAll)
    router.put('/:id', direEnt.update)
    router.delete('/:id', direEnt.delete)

    return router
}

module.exports = direEntRouter;