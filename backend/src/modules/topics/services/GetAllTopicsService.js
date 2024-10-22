class GetAllTopicsServices {
  constructor(topicsRepository) {
    this.topicsRepository = topicsRepository;
  }

  async execute() {
    return this.topicsRepository.getAllTopics();
  }
}

module.exports = GetAllTopicsServices;
