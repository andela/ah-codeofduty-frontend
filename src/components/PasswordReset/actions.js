import axios from 'axios';
import {toast} from 'react-toastify';
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
    .post('https://ah-codeofduty-staging.herokuapp.com/api/users/forgot-password/', data)
    .then(response => {dispatch(resetPasswordSuccess(response.data.message));
      toast.success("Reset link sent to your email", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
    })
    .catch((err) => {dispatch(resetPasswordFailure(err.response.data.error[0]));
      toast.error("Check your email and try again", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
    });
};

export default sendEmailToUser;
