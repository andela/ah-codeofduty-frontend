// import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { urls } from '../../apiEndpoints';
import { profileActionTypes, articleActionTypes } from '../types';
import { articlesFetch, articlesFetched } from '../articlesActions';
import {
  profileFetch,
  profileFetched,
  followFetched,
  onSaveProfile,
  onEditProfile,
  updateProfile,
  onCancelEdit,
  getProfile,
  getFollow,
  editing,
} from '../profileActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const {
  SAVE_PROFILE,
  EDIT_PROFILE,
  PROFILE_FETCH,
  PROFILE_FETCHED,
  FOLLOWERS_FETCHED,
  FOLLOWING_FETCHED,
  CANCEL_EDIT,
  UPDATE_PROFILE,
} = profileActionTypes;

const { ARTICLES_FETCH, ARTICLES_FETCHED } = articleActionTypes;

// test profile action creators
describe('Profile Action creators', () => {
  it('Should dispatch SAVE_PROFILE', () => {
    expect(onSaveProfile().type).toEqual(SAVE_PROFILE);
  });
  it('Should dispatch EDIT_PROFILE', () => {
    expect(onEditProfile().type).toEqual(EDIT_PROFILE);
  });
  it('Should dispatch PROFILE_FETCH', () => {
    expect(profileFetch().type).toEqual(PROFILE_FETCH);
  });
  it('Should dispatch PROFILE_FETCHED', () => {
    expect(profileFetched().type).toEqual(PROFILE_FETCHED);
  });
  it('Should dispatch FOLLOWERS_FETCHED', () => {
    expect(followFetched([], 'followers').type).toEqual(FOLLOWERS_FETCHED);
  });
  it('Should dispatch FOLLOWING_FETCHED,', () => {
    expect(followFetched([], 'following').type).toEqual(FOLLOWING_FETCHED);
  });
  it('Should dispatch CANCEL_EDIT', () => {
    expect(onCancelEdit().type).toEqual(CANCEL_EDIT);
  });
  it('Should dispatch UPDATE_PROFILE', () => {
    expect(updateProfile().type).toEqual(UPDATE_PROFILE);
  });
});

// test articles action creators
describe('Articles Action creators', () => {
  it('Should dispatch ARTICLES_FETCH', () => {
    expect(articlesFetch().type).toEqual(ARTICLES_FETCH);
  });
  it('Should dispatch ARTICLES_FETCHED', () => {
    expect(articlesFetched({}).type).toEqual(ARTICLES_FETCHED);
  });
});

// test actions
describe('Action', () => {
  const store = mockStore({});
  store.dispatch(editing(onEditProfile));
  expect(store.getActions()).toEqual([{ showModal: true, type: 'EDIT_PROFILE' }]);
});

describe('Action', () => {
  const store = mockStore({});
  store.dispatch(editing(onCancelEdit));
  expect(store.getActions()).toEqual([
    {
      showModal: false,
      type: 'CANCEL_EDIT',
    },
  ]);
});

// test actions with axios operations
describe('Axios fetch operations', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  let data = [];

  // test fetch followers
  it('Should fetch followers from API', () => {
    moxios.stubRequest(urls.USER_FOLLOW('followers'), {
      status: 200,
      response: data,
    });
    const store = mockStore({});
    store.dispatch(getFollow('user', 'followers'));
    expect(store.getActions()).toEqual(data);
  });

  // test fetch following
  it('Should fetch following from API', () => {
    moxios.stubRequest(urls.USER_FOLLOW('following'), {
      status: 200,
      response: data,
    });
    const store = mockStore({});
    store.dispatch(getFollow('user', 'following'));
    expect(store.getActions()).toEqual(data);
  });

  // test fetch profile
  it('Should edit profile', () => {
    data = [
      {
        isLoading: true,
        type: 'PROFILE_FETCH',
      },
    ];

    moxios.stubRequest(urls.USER_PROFILE('user'), {
      status: 200,
      response: data,
    });
    const store = mockStore({});
    store.dispatch(getProfile('user'));
    expect(store.getActions()).toEqual(data);
  });

  // test save profile
});
