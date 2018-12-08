import { LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS } from './actionTypes';

export const socialLoginInitiated = () => ({
  type: LOGIN_USER_INITIATED,
});

export const socialLoginSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});
