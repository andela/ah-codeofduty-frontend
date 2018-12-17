// actions

import axios from 'axios';
import { REGISTER_FAILED, REGISTER_SUCCESSFUL } from './types';
import sendLoginRequest from '../../../../views/Auth/LoginForm/thunk';

export const registerSuccessful = () => ({
  type: REGISTER_SUCCESSFUL,
  payload: ['Registration Successful.'],
});

export const registerFailed = error => ({
  type: REGISTER_FAILED,
  error,
});

export const registerUser = user => (dispatch) => {
  axios
    .post('https://ah-codeofduty-staging.herokuapp.com/api/users/', { ...user })
    .then((res) => {
      if (res.status === 201) {
        dispatch(registerSuccessful());
        localStorage.setItem('user', JSON.stringify(user));
      }
      window.location.assign('/');
    })
    .catch((error) => {
      if (error.response.data.errors.password) {
        dispatch(registerFailed(error.response.data.errors.password));
      }
      if (error.response.data.errors.email) {
        dispatch(registerFailed(error.response.data.errors.email));
      }
      if (error.response.data.errors.username) {
        dispatch(registerFailed(error.response.data.errors.username));
      }
    });
};
