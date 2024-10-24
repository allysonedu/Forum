const jwt = require('jsonwebtoken');

const AppError = require('../errors/AppError');

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('Token not provided');

  const token = authHeader.split(' ')[1].replaceAll('"', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    request.user = {
      id: decoded.id,
      name: decoded.name,
    };

    return next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
};
