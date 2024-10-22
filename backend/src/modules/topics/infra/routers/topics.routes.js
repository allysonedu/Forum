const { Router } = require('express');

const {
  createTopics,
  getAllTopics,
  updateTopics,
  deleteTopics,
  getTopic,
} = require('../controllers/topics.controller');

const {
  verifyPayloadForCreation,
  verifyTopicsIdInParams,
  verifyPayloadForGetOne,
  verifyPayloadForDeleted,
} = require('../../middlewares/topics.middleware');

const topicsRouter = Router();

topicsRouter.post('/', verifyPayloadForCreation(), createTopics);

topicsRouter.get('/', getAllTopics);

topicsRouter.put('/:id', verifyTopicsIdInParams(), updateTopics);

topicsRouter.delete('/:id', verifyPayloadForDeleted(), deleteTopics);

topicsRouter.get('/:id', verifyPayloadForGetOne(), getTopic);

module.exports = topicsRouter;
