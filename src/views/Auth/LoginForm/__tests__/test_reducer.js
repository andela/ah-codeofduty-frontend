import * as actions from '../actions';
import * as types from '../actionTypes';


describe('User Actions', () => {
  describe('login success action creator', () => {
    it('should return an action type LOGIN SUCCESS of the user', () => {
      const user = { userInfo: 'some user information', testing: 'yes we are just testing' };
      const expectedAction = {
        type: types.LOGIN_SUCCESS,
        user,
      };
      expect(actions.setLoginSuccess(user)).toEqual(expectedAction);
    });
  });


  describe('login pending', () => {
    it('should return an action type LOGIN PENDING of the user', () => {
      const pending = true;
      const user = { userInfo: 'some user information', testing: 'yes we are just testing' };
      const expectedAction = {
        type: types.LOGIN_PENDING,
        type: types.LOGIN_SUCCESS,
        user: true,
      };
      expect(actions.setLoginSuccess(pending)).toEqual(expectedAction);
    });
  });
});
