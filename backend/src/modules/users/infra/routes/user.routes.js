const { Router } = require('express');

const { createUser } = require('../controllers/users.controller');

const {
  verifyPayloadForCreation,
  verifyPayloadForLogin,
} = require('../../middlewares/users.middleware');

const userRouter = Router();

userRouter.post('/', verifyPayloadForCreation(), createUser);

module.exports = userRouter;
