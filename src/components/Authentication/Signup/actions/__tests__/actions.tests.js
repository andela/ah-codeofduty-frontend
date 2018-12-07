import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REGISTER_FAILED, REGISTER_SUCCESSFUL } from '../types';
import { registerSuccessful, registerFailed } from '../index';
import testData from '../testData';

describe('action creators', () => {
  it('Should dispatch REGISTER_SUCCESSFUL type', () => {
    expect(registerSuccessful({}).type).toEqual(REGISTER_SUCCESSFUL);
  });
  it('Should dispatch REGISTER_FAILED type', () => {
    expect(registerFailed({}).type).toEqual(REGISTER_FAILED);
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Register actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const { user, errors } = testData;
  const url = 'http://127.0.0.1:8000/api/users/';
  it('should return action type and payload for registrationSuccess', async (done) => {
    moxios.stubRequest(url, {
      request: user,
      status: 201,
      response: {},
    });

    const returnedAction = [
      {
        payload: ['Registration Successful. Please login'],
        type: REGISTER_SUCCESSFUL,
      },
    ];

    const store = mockStore({});
    await store.dispatch(registerSuccessful());
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });

  it('should return action type and error for registrationFailure', async (done) => {
    moxios.stubRequest(url, {
      request: errors,
      status: 400,
      response: {},
    });

    const returnedAction = [
      {
        error: errors[0],
        type: REGISTER_FAILED,
      },
    ];
    const store = mockStore({});
    await store.dispatch(registerFailed());
    expect(store.getActions()).toEqual(returnedAction);
    done();
  });
});
