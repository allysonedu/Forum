import { IUser } from '../shared/dtos/IUser';

import { api } from '../shared/services/api';

const login = async (email: string, password: string) => {
  try {
    const result = await api.post('/login', {
      email,
      password,
    });
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { login };
