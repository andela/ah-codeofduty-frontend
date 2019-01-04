import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from '../actionTypes';
import { setLoginError, setLoginPending, setLoginSuccess } from '../actions';

describe('action creators', () => {
  it('Should dispatch LOGIN_PENDING type', () => {
    expect(setLoginPending({}).type).toEqual(LOGIN_PENDING);
  });
  it('Should dispatch LOGIN_SUCCESS type', () => {
    expect(setLoginSuccess({}).type).toEqual(LOGIN_SUCCESS);
  });
  it('should expect LOGIN_ERROR type', () => {
    expect(setLoginError({}).type).toEqual(LOGIN_ERROR);
  });
});
