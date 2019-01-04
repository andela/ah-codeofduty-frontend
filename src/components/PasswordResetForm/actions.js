import axios from 'axios';
import { toast } from 'react-toastify'
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
      `http://127.0.0.1:8000/api/users/reset-password/${token}/`,
      data,
    )
    .then(response => {dispatch(resetPasswordActionSuccess(response.data.message));
      toast.success("password reset successfully", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
    })
    .catch(errors => {dispatch(resetPasswordActionFailure(errors.response));
      toast.error("passwords must match and contain eight characters", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
    });
};

export default updatePassword;
