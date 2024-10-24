const { request } = require('express');
const topicsRepository = require('../../repositories/topics.repository');
const CreateTopicsService = require('../../services/CreateTopicsService');
const GetAllTopicsServices = require('../../services/GetAllTopicsService');
const GetOneTopicsService = require('../../services/GetOneTopicsServices');
const UpdateTopicsService = require('../../services/UpdateTopicsService');
const DeleteTopicsService = require('../../services/DeleteTopicsService');

module.exports = {
  async createTopics(resquest, response) {
    const { title, content, likes, responses_count } = resquest.body;

    const { id } = resquest.user;

    const createTopicsService = new CreateTopicsService(topicsRepository);

    const topicCreated = await createTopicsService.execute({
      title,
      content,
      likes,
      responses_count,
      status: 'active',
      user_id: id,
    });

    return response.json({ data: topicCreated });
  },

  async getAllTopics(resquest, response) {
    const getAll = new GetAllTopicsServices(topicsRepository);

    const topics = await getAll.execute();

    return response.json(topics);
  },

  async getTopic(resquest, response) {
    const { id } = resquest.params;

    const getOne = new GetOneTopicsService(topicsRepository);

    const topic = await getOne.execute(id);

    return response.json(topic);
  },

  async updateTopics(resquest, response) {
    const { id } = resquest.params;

    const payload = {
      id,
      ...resquest.body,
    };

    const updateTopic = new UpdateTopicsService(topicsRepository);

    const TopicUpdated = await updateTopic.execute(payload);

    return response.json(TopicUpdated);
  },

  async deleteTopics(resquest, response) {
    const { id } = resquest.params;

    const deleteTopic = new DeleteTopicsService(topicsRepository);

    await deleteTopic.execute(id);

    return response.json({
      topic: {
        id,
        message: 'Topic deleted successfully',
      },
    });
  },
};
