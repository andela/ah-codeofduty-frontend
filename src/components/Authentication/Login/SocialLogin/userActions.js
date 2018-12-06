import { toast } from 'react-toastify';
import {
  socialLoginInitiated,
  socialLoginSuccess,
} from './actionCreators';

import axiosInstance from '../../../../utils/config';

export const googleLoginUser = (serviceProvider, userData) => (dispatch) => {
  dispatch(socialLoginInitiated(true));
  return axiosInstance.post(serviceProvider, userData)
    .then((res) => {
      localStorage.setItem('auth_token', res.data.user.token);
      dispatch(socialLoginSuccess(true));
      toast.success('Welcome to Authors Haven', { autoClose: 3500, hideProgressBar: true });
      window.location.replace('/');
    })
    .catch(() => {
      toast.error('Connection error', { autoClose: 3500, hideProgressBar: true }, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};

export const facebookLoginUser = (serviceProvider, userData) => (dispatch) => {
  dispatch(socialLoginInitiated(true));
  return axiosInstance.post(serviceProvider, userData)
    .then((res) => {
      localStorage.setItem('auth_token', res.data.user.access_token);
      dispatch(socialLoginSuccess(true));
      toast.success('Welcome to Authors Haven', { autoClose: 3500, hideProgressBar: true });
      window.location.replace('/');
    })
    .catch(() => {
      toast.error('Connection error', { autoClose: 3500, hideProgressBar: true }, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};
