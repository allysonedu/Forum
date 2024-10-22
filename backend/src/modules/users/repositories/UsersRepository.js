const AppError = require('../../../shared/errors/AppError');
const connection = require('../../../shared/database/connection');

module.exports = {
  async findByEmail(email) {
    try {
      return connection('users').where('email', email).first();
    } catch (err) {
      throw new AppError(err.message);
    }
  },

  async createUser(payload) {
    try {
      const user = await connection('users').insert(payload).returning('*');
      return user[0];
    } catch (err) {
      throw new AppError(err.message);
    }
  },
};
