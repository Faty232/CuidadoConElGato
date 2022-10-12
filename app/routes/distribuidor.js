const express = require('express-promise-router');
const distribuidor = require('../controllers/distribuidor')

const distribuidorRouter = () => {
    const router = express.default()

    router.post('/', distribuidor.create)

    return router
}

module.exports = distribuidorRouter;