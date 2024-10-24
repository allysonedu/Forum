const jwt = require('jsonwebtoken');

const AppError = require('../../../shared/errors/AppError');

const { comparePassword } = require('../../../shared/utils/encrypt');

class LoginUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('User not found');
    }

    await comparePassword(password, user.password);

    delete user.password; // Remove password from response

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    return { user, token };
  }
}

module.exports = LoginUserService;
