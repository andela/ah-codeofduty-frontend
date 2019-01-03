import { BOOKMARK_ARTICLE, BOOKMARK_ARTICLE_FAILURE } from '../actions/types';

const initialState = {
  isBookmarking: false,
};

const bookmarkArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKMARK_ARTICLE:
      return {
        ...state,
        isBookmarking: true,
      };
    case BOOKMARK_ARTICLE_FAILURE:
      return {
        ...state,
        isBookmarking: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookmarkArticlesReducer;
