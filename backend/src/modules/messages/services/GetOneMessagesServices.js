class GetOneMessagesServices {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  async execute(topic_id) {
    const messages = await this.messagesRepository.getOneMessagesByTopicId(
      topic_id
    );

    return messages;
  }
}
module.exports = GetOneMessagesServices;
