const { Router } = require('express');

const {
  getAllMessages,
  getOneMessages,
  createMessages,
  deleteMessages,
} = require('../controllers/messages.controller');

const {
  verifyPayloadForCreation,
  verifyMessagesIdInParams,
} = require('../../middlewares/messages.middleware');

const messagesRouter = Router();

messagesRouter.get('/', getAllMessages);

messagesRouter.get('/:messageId', getOneMessages);

messagesRouter.post('/', verifyPayloadForCreation(), createMessages);

messagesRouter.delete(
  '/:messageId',
  verifyMessagesIdInParams(),
  deleteMessages
);

module.exports = messagesRouter;
