const { Router } = require('express');

const {
  getByTopicId,
  getOneMessages,
  createMessages,
  deleteMessages,
} = require('../controllers/messages.controller');

const {
  verifyPayloadForCreation,
  verifyMessagesIdInParams,
} = require('../../middlewares/messages.middleware');

const messagesRouter = Router();

messagesRouter.get('/:topic_id', getByTopicId);

//messagesRouter.get('/:messageId', getOneMessages);

messagesRouter.post('/', verifyPayloadForCreation(), createMessages);

messagesRouter.delete(
  '/:messageId',
  verifyMessagesIdInParams(),
  deleteMessages
);

module.exports = messagesRouter;
