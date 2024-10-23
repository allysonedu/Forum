const { Router } = require('express');

const userRouter = require('../../../modules/users/infra/routes/user.routes');

const loginRouter = require('../../../modules/users/infra/routes/login.routes');

const topicsRouter = require('../../../modules/topics/infra/routers/topics.routes');

const messagesRouter = require('../../../modules/messages/infra/routers/messages.routes');

const ensureAuthenticated = require('../../middlewares/ensure_autenticated');

const routes = Router();

routes.use('/users', userRouter);

routes.use('/login', loginRouter);

routes.use(ensureAuthenticated); // privação de rotas!

routes.use('/topics', topicsRouter);

routes.use('/messages', messagesRouter);

module.exports = routes;
