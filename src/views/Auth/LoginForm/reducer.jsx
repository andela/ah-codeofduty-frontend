import * as actionTypes from './actionTypes';


const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  isLoginError: false,
  loginError: {
    message: '',
  },
  user: {},
};


export default function reducer(state = { initialState }, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoginPending: false,
        isLoginError: false,
        isLoginSuccess: true,
      };
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: true,
        isLoginSuccess: false,
        loginError: null,
        isLoginError: false,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.loginError.status === 400 ? 'Invalid credentials' : 'Unknown error',
        isLoginError: true,
        isLoginPending: false,
        isLoginSuccess: false,
      };
    default:
      return state;
  }
}
