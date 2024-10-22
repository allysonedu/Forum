require('dotenv').config();

const express = require('express');

const { errors } = require('celebrate');

const Youch = require('youch');

require('express-async-errors');

const routes = require('./routes');

const server = express();

PORT = 3333;

server.use(express.json());

server.use(routes);

server.use(errors());

server.use(async (error, request, response, _) => {
  const appError = await new Youch(error, request).toJSON();
  return response.status(appError.error.status || 500).json({
    error: {
      code: appError.error.status || 500,
      message: appError.error.message || 'Internal server error',
    },
  });
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
