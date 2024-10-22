const AppError = require('../../../shared/errors/AppError');

class DeleteTopicsService {
  constructor(topicsRepository) {
    this.topicsRepository = topicsRepository;
  }

  async execute(idTopics) {
    const topic = await this.topicsRepository.getOneTopics(idTopics);

    if (!topic) throw new AppError('No such topic');

    return this.topicsRepository.deleteTopics(idTopics);
  }
}

module.exports = DeleteTopicsService;
