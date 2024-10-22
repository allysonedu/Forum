const AppError = require('../../../shared/errors/AppError');

class UpdateTopicsService {
  constructor(topicsRepository) {
    this.topicsRepository = topicsRepository;
  }

  async execute(payload) {
    const topic = await this.topicsRepository.getOneTopics(payload.id);

    if (!topic) {
      throw new AppError('Topic not found');
    }

    return this.topicsRepository.updateTopics(payload);
  }
}

module.exports = UpdateTopicsService;
