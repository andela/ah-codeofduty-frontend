import { REGISTER_SUCCESSFUL, REGISTER_FAILED } from '../actions/types';

export const initialState = {
  visible: false,
  message: '',
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
      return {
        ...state,
        registered: true,
        isAuthenticated: false,
        message: action.payload,
        visible: true,
        success: true,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        registered: false,
        message: action.error,
        visible: true,
        success: false,
      };


    default:
      return state;
  }
};
