import sendLoginRequest from './thunk';
import * as actionTypes from './actionTypes';

export const setLoginPending = () => ({
  type: actionTypes.LOGIN_PENDING,
});

export const setLoginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  user,
});

export const setLoginError = loginError => ({
  type: actionTypes.LOGIN_ERROR,
  isLoginError: true,
  loginError,
});

export default function login({ email, password }) {
  return (dispatch) => {
    dispatch(setLoginPending(true));
    sendLoginRequest({ email, password })
      .then(({ data }) => {
        // eslint ignore next-line
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch(setLoginSuccess(data.user));
      })
      .catch((err) => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err.response));
      });
  };
}
