class CreateTopicsService {
  constructor(topicsRepository) {
    this.topicsRepository = topicsRepository;
  }

  async execute({ title, content, views, responses_count, status, user_id }) {
    const topics = await this.topicsRepository.createTopics({
      title,
      content,
      views,
      responses_count,
      status,
      user_id,
    });

    return topics;
  }
}

module.exports = CreateTopicsService;
