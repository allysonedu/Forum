import { api } from '../shared/services/api';

import { IMessages } from '../shared/dtos/IMessages';

const createMessages = async (data: IMessages) => {
  try {
    const result = await api.post('/messages', data);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteMessages = async (id: number) => {
  try {
    const result = await api.delete(`/messages/${id}`);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const getByTopicId = async (topic_id: number) => {
  try {
    return await api.get(`/messages/${topic_id}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getByTopicId, createMessages, deleteMessages };
