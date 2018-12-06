import axios from 'axios';
import { urls, headerObject } from '../apiEndpoints';

export const ActionTypes = {
  SAVE_PROFILE: 'SAVE_PROFILE',
  EDIT_PROFILE: 'EDIT_PROFILE',
  PROFILE_FETCH: 'PROFILE_FETCH',
  PROFILE_FETCHED: 'PROFILE_FETCHED',
  FOLLOWERS_FETCH: 'FOLLOWERS_FETCH',
  FOLLOWERS_FETCHED: 'FOLLOWERS_FETCHED',
  FOLLOWING_FETCH: 'FOLLOWING_FETCH',
  FOLLOWING_FETCHED: 'FOLLOWING_FETCHED',
  CANCEL_EDIT: 'CANCEL_EDIT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
};

const profileFetch = () => ({
  type: ActionTypes.PROFILE_FETCH,
  isLoading: true,
});

const profileFetched = profile => ({
  type: ActionTypes.PROFILE_FETCHED,
  isLoading: false,
  profile,
});

const followersFetched = followers => ({
  type: ActionTypes.FOLLOWERS_FETCHED,
  followers,
});

const followingFetched = following => ({
  type: ActionTypes.FOLLOWING_FETCHED,
  following,
});

const onSaveProfile = () => ({
  type: ActionTypes.SAVE_PROFILE,
  showModal: false,
});
const onEditProfile = () => ({
  type: ActionTypes.EDIT_PROFILE,
  showModal: true,
});

const onCancelEdit = () => ({
  type: ActionTypes.CANCEL_EDIT,
  showModal: false,
});

const updateProfile = profile => ({
  type: ActionTypes.UPDATE_PROFILE,
  profile,
});

export const getProfile = user => (dispatch) => {
  dispatch(profileFetch());
  return axios
    .get(urls.USER_PROFILE(user))
    .then(response => dispatch(profileFetched(response.data.profile)))
    .catch(error => console.log(error));
};

export const getFollowers = (user, token) => dispatch => axios
  .get(urls.USER_FOLLOWERS(user), headerObject(token))
  .then((resp) => {
    dispatch(followersFetched(resp.data.profile.followers));
  })
  .catch(error => console.log(error));

export const getFollowing = (user, token) => dispatch => axios
  .get(urls.USER_FOLLOWING(user), headerObject(token))
  .then((resp) => {
    dispatch(followingFetched(resp.data.profile.following));
  })
  .catch(error => console.log(error));

export const editProfile = () => (dispatch) => {
  dispatch(onEditProfile());
};

export const saveProfile = body => (dispatch) => {
  console.log('I got here!');
  const user = 'user'; // TODO: fetch from localStorage
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiaWF0IjoxNTQ0MDgwMDEwfQ.qLGiVmpqz1VY_b-ztA-SB1qyGgHHslCckJ-rMSaNntw';
  axios
    .put(urls.USER_PROFILE(user), body, headerObject(token))
    .then((response) => {
      console.log("Here's my response", response.data.profile);
      dispatch(onSaveProfile());
      dispatch(updateProfile(response.data.profile));
    })
    .catch(error => console.log(error));
};

export const cancelEdit = () => (dispatch) => {
  dispatch(onCancelEdit());
};
