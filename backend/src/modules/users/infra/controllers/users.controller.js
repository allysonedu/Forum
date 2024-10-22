module.exports = {
  async createUser(resquest, response) {
    return response.json({ message: 'User created' });
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
