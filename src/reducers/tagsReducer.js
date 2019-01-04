import { GET_ALL_TAGS } from '../components/Articles/actionTypes';

export const initialState = {
  tags: [],
};

export const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: action.tags,
      };
    default:
      return state;
  }
};

export default tagReducer;
