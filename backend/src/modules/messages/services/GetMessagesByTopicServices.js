class GetMessagesByTopicServices {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  async execute(topic_id) {
    const messages = await this.messagesRepository.getMessagesByTopicId(
      topic_id
    );

    return messages;
  }
}

module.exports = GetMessagesByTopicServices;
