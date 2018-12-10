import {
  LOGIN_USER_INITIATED,
  LOGIN_USER_SUCCESS,
} from '../components/Authentication/SocialLogin/actionTypes';

const initialState = {
  user: {
    isLoggedIn: false,
  },
};

const socialLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default socialLoginReducer;
