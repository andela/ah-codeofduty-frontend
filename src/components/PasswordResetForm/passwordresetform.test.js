import expect from 'expect';
import * as actions from './actions';
import * as types from './constants';
import * as action from '../PasswordReset/actions';
import * as type from '../PasswordReset/constants';

describe('Reset saved password in database', () => {
  it('start process of resetting password', () => {
    const email = 'example@gmail.com';
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION,
    };
    expect(actions.resetPasswordAction(email)).toEqual(expectedAction);
  });

  it('reset password failure', () => {
    const expected = {
      type: types.RESET_PASSWORD_ACTION_FAILURE,
    };
    expect(actions.resetPasswordActionFailure()).toEqual(expected);
  });

  it('reset password sucess', () => {
    const expected = {
      type: types.RESET_PASSWORD_ACTION_SUCCESS,
    };
    expect(actions.resetPasswordActionSuccess()).toEqual(expected);
  });

  it('start retriving forgoten password', () => {
    const email = 'example@gmail.com';
    const expected = {
      type: type.RESET_PASSWORD,
    };
    expect(action.resetPassword(email)).toEqual(expected);
  });

  it('forgot password failure', () => {
    const expected = {
      type: type.RESET_PASSWORD_FAILURE,
    };
    expect(action.resetPasswordFailure()).toEqual(expected);
  });

  it('forgot password sucess', () => {
    const expected = {
      type: type.RESET_PASSWORD_SUCCESS,
    };
    expect(action.resetPasswordSuccess()).toEqual(expected);
  });
});
