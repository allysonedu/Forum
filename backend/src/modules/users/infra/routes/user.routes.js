const { Router } = require('express');

const { createUser } = require('../controllers/users.controller');

const userRouter = Router();

userRouter.post('/', createUser);

module.exports = userRouter;
