const AppError = require('../../../shared/errors/AppError');

const connection = require('../../../shared/database/connection');
const { deleteMessages } = require('../infra/controllers/messages.controller');

module.exports = {
  async createMessages(payload) {
    try {
      const message = await connection('messagens')
        .insert(payload)
        .returning('*');
      return message[0];
    } catch (err) {
      throw new AppError(err.message);
    }
  },

  async getMessagesByTopicId(topic_id) {
    try {
      return connection('messagens').where({ topic_id });
    } catch (err) {
      throw new AppError(err.message);
    }
  },

  async getOneMessagesByTopicId(topic_id) {
    try {
      return connection('messagens').where({ topic_id });
    } catch (err) {
      throw new AppError(err.message);
    }
  },

  async deleteMessages(topic_id) {
    try {
      return connection('messagens').where({ topic_id }).del();
    } catch (err) {
      throw new AppError(err.message);
    }
  },
};
