const userRepository = require('../../repositories/UsersRepository');

const LoginUserService = require('../../services/LoginUserService');

module.exports = {
  async userLogin(request, response) {
    const { email, password } = request.body;

    const loginService = new LoginUserService(userRepository);

    const user = await loginService.execute({ email, password });

    return response.json(user);
  },
};
