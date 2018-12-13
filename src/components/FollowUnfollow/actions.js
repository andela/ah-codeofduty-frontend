import axios from 'axios';
import * as types from './constant';
import authUser from '../../utils/authUser';

export const followFetching = () => ({
  type: types.FOLLOW_FETCHING,
});

export const followSucess = result => ({
  type: types.FOLLOW_SUCCESS,
  result,
});

export const followFail = errors => ({
  type: types.FOLLOW_FAIL,
  errors,
});

const { token } = authUser();

export const followUnfollow = username => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  dispatch(followFetching());
  axios
    .put(`https://ah-codeofduty-staging.herokuapp.com/api/profiles/${username}/follow`, null, {
      headers,
    })
    .then(response => dispatch(followSucess(response.data)))
    .catch(errors => dispatch(followFail(errors.response)));
};
