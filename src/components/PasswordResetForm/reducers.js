import {
  RESET_PASSWORD_ACTION,
  RESET_PASSWORD_ACTION_SUCCESS,
  RESET_PASSWORD_ACTION_FAILURE,
} from './constants';

const initialState = {
  message: {},
  fetching: false,
  fetched: false,
  errors: null,
};
function newPassword(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_ACTION:
      return { ...state, fetching: true };
    case RESET_PASSWORD_ACTION_SUCCESS:
      return {
        ...state,
        fetching: false,
        message: action.payload,
        fetched: true,
      };
    case RESET_PASSWORD_ACTION_FAILURE:
      return {
        ...state,
        fetching: false,
        errors: action.errors,
      };
    default:
      return state;
  }
}

export default newPassword;
