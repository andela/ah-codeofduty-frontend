import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/';
const timeout = false;
const token = localStorage.getItem('auth_token');
const headers = token ? {
  'Content-Type': 'application/json',
  Authorization: '',
} : {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
});

export default axiosInstance;
