import axios from 'axios';
export const BASE_URL = 'http://localhost:8080/api/v1';

const baseAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
baseAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

baseAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    throw error.response.data;
  },
);

export default baseAxios;
