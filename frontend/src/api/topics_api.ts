import { api } from '../shared/services/api';

import { ITopics } from '../shared/dtos/ITopics';

const createTopics = async (data: ITopics) => {
  try {
    const result = await api.post('/topics', data);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateTopics = async (data: ITopics) => {
  try {
    const result = await api.put(`/topics/${data.id}`, data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteTopics = async (id: number) => {
  try {
    const result = await api.delete(`/topics/${id}`);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const getAllTopics = async () => {
  try {
    return await api.get(`/topics`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getOneTopics = async (id: Number) => {
  try {
    return await api.get(`/topics/${id}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getAllTopics, createTopics, updateTopics, deleteTopics, getOneTopics };
