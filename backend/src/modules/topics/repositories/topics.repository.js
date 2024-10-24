const AppError = require('../../../shared/errors/AppError');

const connection = require('../../../shared/database/connection');

module.exports = {
  async createTopics(payload) {
    try {
      const topics = await connection('topics').insert(payload).returning('*');

      return topics[0];
    } catch (err) {
      throw new AppError(err.message);
    }
  },

  async getAllTopics() {
    return connection('topics')
      .join('users', 'users.id', '=', 'topics.user_id')
      .select('users.name as user_name', 'topics.*');
  },

  async getOneTopics(idTopics) {
    return connection('topics').where({ id: idTopics }).first();
  },

  async updateTopics(payload) {
    return connection('topics')
      .update(payload)
      .where('id', payload.id)
      .returning('*');
  },

  async deleteTopics(idTopics) {
    return connection('topics').delete().where({ id: idTopics });
  },
};
