import axios from 'axios';
import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ACTION_SUCCESS,
  RESET_PASSWORD_ACTION_FAILURE,
} from './constants';

export const resetPasswordAction = () => ({
  type: RESET_PASSWORD_ACTION,
});

export const resetPasswordActionSuccess = payload => ({
  type: RESET_PASSWORD_ACTION_SUCCESS,
  payload,
});

export const resetPasswordActionFailure = errors => ({
  type: RESET_PASSWORD_ACTION_FAILURE,
  errors,
});

const updatePassword = (data, token = null) => (dispatch) => {
  dispatch(resetPasswordAction());
  axios
    .post(
      `https://ah-codeofduty-frontend-staging.herokuapp.com/api/users/reset-password/${token}/`,
      data,
    )
    .then(response => dispatch(resetPasswordActionSuccess(response.data.message)))
    .catch(errors => dispatch(resetPasswordActionFailure(errors.response)));
};

export default updatePassword;