import authReducer, { initialState } from '../authReducer';
import { REGISTER_SUCCESSFUL } from '../../actions/types';

describe('authreducer reducers', () => {
  it('should provide the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
   it('should add data to the state', () => {
    expect(
      authReducer(initialState, { type: REGISTER_SUCCESSFUL, payload: '' }).visible,
    ).toEqual(true);
  });
});