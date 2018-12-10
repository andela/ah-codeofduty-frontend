import expect from 'expect';
import * as actions from './actions';
import * as types from './constants';
import * as action from '../PasswordReset/actions';
import * as type from '../PasswordReset/constants';

describe('Reset saved password i database', () => {
  it('start process of resetting password', () => {
    const email = 'example@gmail.com';
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION,
    };
    expect(actions.resetPasswordAction(email)).toEqual(expectedAction);
  });

  it('reset password failure', () => {
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION_FAILURE,
    };
    expect(actions.resetPasswordActionFailure()).toEqual(expectedAction);
  });

  it('reset password sucess', () => {
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION_SUCCESS,
    };
    expect(actions.resetPasswordActionSuccess()).toEqual(expectedAction);
  });

  // ........................

  it('start process of resetting password', () => {
    const email = 'example@gmail.com';
    const expectedAction = {
      type: type.RESET_PASSWORD,
    };
    expect(action.resetPassword(email)).toEqual(expectedAction);
  });

  it('forgot password failure', () => {
    const expectedAction = {
      type: type.RESET_PASSWORD_FAILURE,
    };
    expect(action.resetPasswordFailure()).toEqual(expectedAction);
  });

  it('forgot password sucess', () => {
    const expectedAction = {
      type: type.RESET_PASSWORD_SUCCESS,
    };
    expect(action.resetPasswordSuccess()).toEqual(expectedAction);
  });
});
