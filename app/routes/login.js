const express = require('express-promise-router');
const login = require('../controllers/login')

const loginRouter = () => {
    const router = express.default()

    router.post('/', login.create)
    router.get('/:token', login.getByToken)
    router.delete('/:token', login.logOut)

    return router
}

module.exports = loginRouter;