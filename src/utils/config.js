import axios from 'axios';

const baseURL = 'https://ah-codeofduty-staging.herokuapp.com/';
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
