const usersRepository = require('../../repositories/UsersRepository');

const CreateUserService = require('../../services/CreateUserService');

module.exports = {
  async createUser(resquest, response) {
    const { name, email, password } = resquest.body;
    const createUser = new CreateUserService(usersRepository);
    const user = await createUser.execute({
      name,
      email,
      password,
    });
    return response.json({ data: user });
  },

  // async getAllUser(resquest, response) {
  //   return response.json({ message: 'User getAll' });
  // },

  // async updateUser(resquest, response) {
  //   return response.json({ message: 'User updated' });
  // },

  // async deleteUser(resquest, response) {
  //   return response.json({ message: 'User deleted' });
  // }
};
