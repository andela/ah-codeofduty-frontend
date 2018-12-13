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
    const data = {
      results: [],
      links: {
        next: '',
        prev: '',
        articlesCount: 0,
      },
    };
    expect(articlesFetched(data).type).toEqual(ARTICLES_FETCHED);
  });
});

// test actions
describe('Actions', () => {
  const store = mockStore({});

  const dispatching = (method, showModal, type) => {
    store.dispatch(editing(method));
    expect.objectContaining({
      showModal,
      type,
    });
  };
  it('Should dispatch edit profile', () => {
    dispatching(onEditProfile, true, EDIT_PROFILE);
  });
  it('Should dispatch cancel profile', () => {
    dispatching(onCancelEdit, false, CANCEL_EDIT);
  });
});

// test actions with axios operations
describe('Axios fetch operations', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const store = mockStore({});
  let data = [];

  const moxiosFetch = (url, method) => {
    moxios.stubRequest(url, {
      status: 200,
      response: data,
    });
    store.dispatch(method());
    expect(store.getActions()).toEqual(data);
  };

  // test fetch followers
  it('Should fetch followers from API', () => {
    moxiosFetch(urls.USER_FOLLOW('followers'), () => getFollow('user', 'followers'));
  });

  // test fetch following
  it('Should fetch following from API', () => {
    moxiosFetch(urls.USER_FOLLOW('following'), () => getFollow('user', 'following'));
  });

  // test fetch profile
  it('Should edit profile', () => {
    data = [
      {
        isLoading: true,
        type: 'PROFILE_FETCH',
      },
    ];
    moxiosFetch(urls.USER_PROFILE('user'), () => getProfile('user'));
  });

  // test save profile
});
