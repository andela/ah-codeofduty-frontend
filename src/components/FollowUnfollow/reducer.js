import * as types from './constant';

const initialState = {
  data: null,
  fetching: false,
  fetched: false,
  errors: null,
};

const followUnfollowReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FOLLOW_FETCHING:
      return { ...state, fetching: true };
    case types.FOLLOW_FAIL:
      return { ...state, errors: action.errors };
    case types.FOLLOW_SUCCESS:
      return { ...state, fetched: true, data: action.result };
    default:
      return state;
  }
};
export default followUnfollowReducer;
