const AppError = require('../../../shared/errors/AppError');

class GetOneTopicsService {
  constructor(topicsRepository) {
    this.topicsRepository = topicsRepository;
  }

  async execute(idTopics) {
    const topic = await this.topicsRepository.getOneTopics(idTopics);

    if (!topic) throw new AppError('Topics not found');

    return topic;
  }
}

module.exports = GetOneTopicsService;
