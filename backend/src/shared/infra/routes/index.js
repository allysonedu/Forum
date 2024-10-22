const { Router } = require('express');

const userRouter = require('../../../modules/users/infra/routes/user.routes');

const routes = Router();

routes.use('/users', userRouter);

module.exports = routes;
