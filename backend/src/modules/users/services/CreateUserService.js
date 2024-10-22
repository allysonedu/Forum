const AppError = require('../../../shared/errors/AppError');
const { generateHash } = require('../../../shared/utils/encrypt');

class CreateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      payload.email
    );
    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const { password } = payload;
    const hashedPassword = await generateHash(password);
    /**
     * É uma forma de appendar valores em uma variavel, ou seja, adicionar ou
     * alterar algum valor
     */
    Object.assign(payload, { password: hashedPassword });

    const user = await this.usersRepository.createUser(payload);

    delete user.password;

    return { user };
  }
}

module.exports = CreateUserService;
