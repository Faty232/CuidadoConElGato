const express = require('express-promise-router');
const login = require('../controllers/login')

const loginRouter = () => {
    const router = express.default()

    router.post('/', login.create)

    return router
}

module.exports = loginRouter;