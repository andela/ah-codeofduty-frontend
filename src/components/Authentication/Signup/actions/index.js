// actions

import axios from 'axios';
import { REGISTER_FAILED, REGISTER_SUCCESSFUL } from './types';
import { STAGING_URL } from '../../../../utils/config';
import sendLoginRequest from '../../../../views/Auth/LoginForm/thunk';
import { setLoginSuccess } from '../../../../views/Auth/LoginForm/actions';
import { urls } from '../../../../apiEndpoints';

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
    .post(urls.SIGNUP, { ...user })
    .then((res) => {
      console.log(res.data.user);
      if (res.status === 201) {
        dispatch(registerSuccessful());
        sendLoginRequest(user).then(({ data }) => {
          dispatch(setLoginSuccess(data.user));
          // eslint ignore next-line
          // localStorage.setItem('user', JSON.stringify(data.user));
        });
        // eslint ignore next-line
        localStorage.setItem('user', JSON.stringify(res.data.user));
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
