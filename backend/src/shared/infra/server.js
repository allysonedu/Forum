require('dotenv').config();

const express = require('express');

const routes = require('./routes');

const server = express();

PORT = 3333;

server.use(express.json());

server.use(routes);

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
