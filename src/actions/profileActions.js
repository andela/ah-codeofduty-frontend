import axios from 'axios';

import { urls, headerObject } from '../apiEndpoints';
import { profileActionTypes } from './types';
import authUser from '../utils/authUser';

const { username, token } = authUser();
export const profileFetch = () => ({
  type: profileActionTypes.PROFILE_FETCH,
  isLoading: true,
});

export const profileFetched = profile => ({
  type: profileActionTypes.PROFILE_FETCHED,
  isLoading: false,
  profile,
});

export const followFetched = (follow, followType) => ({
  type:
    followType === 'following'
      ? profileActionTypes.FOLLOWERS_FETCHED
      : profileActionTypes.FOLLOWERS_FETCHED,
  follow,
});

export const onSaveProfile = () => ({
  type: profileActionTypes.SAVE_PROFILE,
  showModal: false,
});

export const onEditProfile = () => ({
  type: profileActionTypes.EDIT_PROFILE,
  showModal: true,
});

export const onCancelEdit = () => ({
  type: profileActionTypes.CANCEL_EDIT,
  showModal: false,
});

export const updateProfile = profile => ({
  type: profileActionTypes.UPDATE_PROFILE,
  profile,
});

export const getProfile = user => (dispatch) => {
  dispatch(profileFetch());
  axios
    .get(urls.USER_PROFILE(user), headerObject(token))
    .then((response) => {
      dispatch(profileFetched(response.data.profile));
    })
    .catch(error => console.log(error));
};

export const getFollow = (user, follow) => dispatch => axios
  .get(urls.USER_FOLLOW(user, follow), headerObject(token))
  .then((resp) => {
    dispatch(followFetched(resp.data.profile[follow], follow));
  })
  .catch(error => console.log(error));

export const saveProfile = body => (dispatch) => {
  axios
    .put(urls.USER_PROFILE(username), body, headerObject(token))
    .then((response) => {
      console.log("Here's my response", response.data.profile);
      dispatch(onSaveProfile());
      dispatch(updateProfile(response.data.profile));
    })
    .catch(error => console.log(error));
};

export const editing = method => (dispatch) => {
  dispatch(method());
};
