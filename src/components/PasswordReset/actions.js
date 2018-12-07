import axios from 'axios';
import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from './constants';

export const resetPassword = () => ({
  type: RESET_PASSWORD,
});

export const resetPasswordSuccess = payload => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordFailure = errors => ({
  type: RESET_PASSWORD_FAILURE,
  errors,
});

const sendEmailToUser = data => (dispatch) => {
  dispatch(resetPassword());
  axios
    // .post('https://ah-codeofduty-staging.herokuapp.com/api/users/forgot-password/', data)
    .post('http://127.0.0.1:8000/api/users/forgot-password/', data)
    .then(response => dispatch(resetPasswordSuccess(response.data.message)))
    .catch((err) => {
      dispatch(resetPasswordFailure(err.response.data.error[0]));
    });
};

export default sendEmailToUser;
