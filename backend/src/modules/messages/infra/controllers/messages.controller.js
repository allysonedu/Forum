const { request } = require('express');
const messagesRepository = require('../../repositories/messages.repository');
const CreateMessagesService = require('../../services/CreateMessagesService');
const GetMessagesByTopicServices = require('../../services/GetMessagesByTopicServices');
const DeleteMessagesService = require('../../services/DeleteMessagesService');
const GetOneMessagesServices = require('../../services/GetOneMessagesServices');

module.exports = {
  async createMessages(request, response) {
    const { topic_id, content } = request.body;

    const { id } = request.user; // Assuming the user_id is passed in the request as a header or query parameter

    const createMessages = new CreateMessagesService(messagesRepository);

    const message = await createMessages.execute({
      topic_id,
      content,
      users_id: id,
    });
    return response.json({ data: message });
  },

  async getByTopicId(request, response) {
    const { topic_id } = request.params;

    const getMessagesByTopicServices = new GetMessagesByTopicServices(
      messagesRepository
    );

    const messages = await getMessagesByTopicServices.execute(topic_id);

    return response.json(messages);
  },

  async getOneMessages(request, response) {
    const { messageId } = request.params;
    const { topic_id } = request.body;

    const getOneMessagesService = new GetOneMessagesServices(
      messagesRepository
    );
    const message = await getOneMessagesService.execute(messageId, topic_id);

    return response.json(message);
  },

  async deleteMessages(request, response) {
    const { messageId } = request.params;
    const { topic_id } = request.body;

    const deleteMessagesService = new DeleteMessagesService(messagesRepository);

    await deleteMessagesService.execute(messageId, topic_id);

    return response.json({ messages: 'Message delete' });
  },
};

//
