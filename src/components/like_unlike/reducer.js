import * as types from './constants';

const initialState = {
  likes: null,
  fetching: false,
  fetched: false,
  errors: null,
};

function likeDislikeReducer(state = initialState, action) {
  switch (action.type) {
    case types.LIKE_ARTICLE:
      return { ...state, fetching: true };

    case types.LIKE_ARTICLE_SUCCESS:
      return { ...state, fetched: true, likes: action.result };

    case types.LIKE_ARTICLE_FAILURE:
      return { ...state, errors: action.errors };

    case types.UNLIKE_ARTICLE:
      return { ...state, fetching: true };

    case types.UNLIKE_ARTICLE_SUCCESS:
      return { ...state, fetched: true, likes: action.result };

    case types.UNLIKE_ARTICLE_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}

export default likeDislikeReducer;
