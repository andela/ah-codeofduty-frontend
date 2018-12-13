import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { socialAuthentication } from '../userActions';
import { LOGIN_USER_INITIATED, LOGIN_USER_SUCCESS } from '../actionTypes';
import axiosInstance from '../../../../utils/config';

describe('userAction', () => {
  let store;
  let mock;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  it('should have social login initiated with google', async () => {
    const user_data = {
      provider: 'google-oauth2',
      access_token: 'token',
    };
    const type = [{ type: LOGIN_USER_INITIATED }];
      socialAuthentication('/api/social_auth/', user_data)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(type);
  });
  it('should have social login initiated with facebook', async () => {
    const user_data = {
      provider: 'google-oauth2',
      access_token: 'token',
    };
    const type = [{ type: LOGIN_USER_INITIATED }];
      socialAuthentication('/api/social_auth/', user_data)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(type);
  });
  it('should have social login successful google', () => {
    const response = {
      provider: 'google-oauth2',
      access_token: 'token',
    };
    const user_data = {
      provider: 'google-oauth2',
      access_token: 'token',
    };
    const expectedActions = [
      { type: LOGIN_USER_INITIATED },
      { type: LOGIN_USER_SUCCESS },
    ];
    mock
      .onPost('/api/social_auth/', user_data)
      .reply(200, response);
    store.dispatch(socialAuthentication('/api/social_auth/', user_data))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should have social login successful facebook', () => {
    const response = {
      provider: 'google-oauth2',
      access_token: 'token',
    };
    const user_data = {
      provider: 'google-oauth2',
      access_token: 'token',
    };
    const expectedActions = [
      { type: LOGIN_USER_INITIATED },
      { type: LOGIN_USER_SUCCESS },
    ];
    mock
      .onPost('/api/social_auth/', user_data)
      .reply(200, response);
    store.dispatch(socialAuthentication('/api/social_auth/', user_data))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
