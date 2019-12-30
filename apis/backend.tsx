import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const backend = axios.create({
  baseURL: publicRuntimeConfig.BACKEND_URL,
  headers: {
    'x-api-key': publicRuntimeConfig.BACKEND_APIKEY,
    'Content-type': 'application/json'
  }
});

export const getProducts = async () => {
  return await backend.get('/product');
};

export const getProductById = async (id: String) => {
  console.log('getProductById', id);
  const { data } = await backend.get(`/product/${id}`);
  console.log('getProductById p', data);
  return data;
};
