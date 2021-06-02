import axios from 'axios';

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

export const fetcher = async (resource: string) => {
  try {
    const response = await api.get(resource);
    return response?.data;
  } catch (error) {
    throw new Error(error);
  }
};


export default api;
