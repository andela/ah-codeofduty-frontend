import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from './constants';

const initialState = {
  message: {},
  fetching: false,
  fetched: false,
  errors: null,
  visible: false,
  success_visible: false,
};
function userEmail(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD:
      return { ...state, fetching: true };
    case RESET_PASSWORD_SUCCESS:
      // window.alert(action.payload);
      return {
        ...state,
        fetching: false,
        message: action.payload,
        fetched: true,
        errors: null,
        visible: true,
      };
    case RESET_PASSWORD_FAILURE:
      // window.alert(action.errors);
      return {
        ...state,
        fetching: false,
        errors: action.errors,
        visible: true,
      };
    default:
      return state;
  }
}

export default userEmail;
