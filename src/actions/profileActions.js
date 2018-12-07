import axios from 'axios';

import { urls, headerObject } from '../apiEndpoints';
import { profileActionTypes } from './types';
import getItem from '../utils/getItem';

const { username, token } = getItem('user');
export const profileFetch = () => ({
  type: profileActionTypes.PROFILE_FETCH,
  isLoading: true,
});

export const profileFetched = profile => ({
  type: profileActionTypes.PROFILE_FETCHED,
  isLoading: false,
  profile,
});

export const followersFetched = followers => ({
  type: profileActionTypes.FOLLOWERS_FETCHED,
  followers,
});

export const followingFetched = following => ({
  type: profileActionTypes.FOLLOWING_FETCHED,
  following,
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
      return true;
    })
    .catch(error => console.log(error));
};

export const getFollowers = user => dispatch => axios
  .get(urls.USER_FOLLOWERS(user), headerObject(token))
  .then((resp) => {
    dispatch(followersFetched(resp.data.profile.followers));
  })
  .catch(error => console.log(error));

export const getFollowing = user => dispatch => axios
  .get(urls.USER_FOLLOWING(user), headerObject(token))
  .then((resp) => {
    dispatch(followingFetched(resp.data.profile.following));
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

export const editProfile = () => (dispatch) => {
  dispatch(onEditProfile());
};

export const cancelEdit = () => (dispatch) => {
  dispatch(onCancelEdit());
};
