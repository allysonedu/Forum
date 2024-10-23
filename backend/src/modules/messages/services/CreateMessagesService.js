class CreateMessagesService {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  async execute(payload) {
    const message = await this.messagesRepository.createMessages(payload);
    return message;
  }
}

module.exports = CreateMessagesService;
