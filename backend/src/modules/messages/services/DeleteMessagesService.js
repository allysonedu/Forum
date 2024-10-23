const AppError = require('../../../shared/errors/AppError');

class DeleteMessagesService {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  async execute(topic_id) {
    const messages = await this.messagesRepository.getOneMessagesByTopicId(
      topic_id
    );
    if (!messages) {
      throw new AppError('No messages found in this topic');
    }

    const messagesDeleted = await this.messagesRepository.deleteMessages(
      topic_id
    );
    return messagesDeleted;
  }
}

module.exports = DeleteMessagesService;
