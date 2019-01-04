import axios from 'axios';

export const STAGING_URL = "https://ah-codeofduty-staging.herokuapp.com/api";
export const FE_URL= "https://ah-codeofduty-frontend-staging.herokuapp.com";

export const headerObject = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

const baseURL = 'https://ah-codeofduty-staging.herokuapp.com/';

const timeout = false;
const token = localStorage.getItem('auth_token');
const headers = token
  ? {
    'Content-Type': 'application/json',
    Authorization: '',
  }
  : {
    'Content-Type': 'application/json',
  };

const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
});

export default axiosInstance;
