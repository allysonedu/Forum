const { Router } = require('express');

const userRouter = require('../../../modules/users/infra/routes/user.routes');

const loginRouter = require('../../../modules/users/infra/routes/login.routes');

const routes = Router();

routes.use('/users', userRouter);

routes.use('/login', loginRouter);

module.exports = routes;
