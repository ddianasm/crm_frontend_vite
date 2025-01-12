import axios from 'axios';

export const baseApiUrl = 'http://localhost:3000';

const instanceConfig = {
  withCredentials: true,
  baseURL: baseApiUrl,
  headers: { 'Content-Type': 'application/json' },
};

export const mainInstance = axios.create(instanceConfig);
mainInstance.interceptors.response.use(
  response => response,
  error => error.response
);
