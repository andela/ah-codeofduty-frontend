import { REGISTER_FAILED, REGISTER_SUCCESSFUL } from '../types';
import { registerSuccessful, registerFailed } from '../index';

describe('action creators', () => {
  it('Should dispatch REGISTER_SUCCESSFUL type', () => {
    expect(registerSuccessful({}).type).toEqual(REGISTER_SUCCESSFUL);
  });
  it('Should dispatch REGISTER_FAILED type', () => {
    expect(registerFailed({}).type).toEqual(REGISTER_FAILED);
  });
});
