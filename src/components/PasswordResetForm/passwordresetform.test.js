import expect from 'expect';
import * as actions from './actions';
import * as types from './constants';
import * as action from '../PasswordReset/actions';
import * as type from '../PasswordReset/constants';

<<<<<<< HEAD
const test = (type, action) => {
  const expected = { type };
  expect(action).toEqual(expected);
};
describe('Reset saved password in database', () => {
  it('reset password failure', () => {
    test(types.RESET_PASSWORD_ACTION_FAILURE, actions.resetPasswordActionFailure());
=======
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
>>>>>>> 9105c667a25992d6c1087b80fc2af00d65efccf3
  });
  it('reset password sucess', () => {
<<<<<<< HEAD
    test(types.RESET_PASSWORD_ACTION_SUCCESS, actions.resetPasswordActionSuccess());
  });
  it('reset password', () => {
    test(types.RESET_PASSWORD_ACTION, actions.resetPasswordAction());
  });

  it('forgot pass failure', () => {
    test(type.RESET_PASSWORD_FAILURE, action.resetPasswordFailure());
  });
  it('forgot pass sucess', () => {
    test(type.RESET_PASSWORD_SUCCESS, action.resetPasswordSuccess());
  });
  it('forgot pass', () => {
    test(type.RESET_PASSWORD, action.resetPassword());
=======
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
>>>>>>> 9105c667a25992d6c1087b80fc2af00d65efccf3
  });
});
