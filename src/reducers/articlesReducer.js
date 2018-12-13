import { articleActionTypes } from '../actions/types';

const initialState = {
  articles: [],
  isLoading: false,
  likeDislikeSuccess: false,
  likeDislikeError: {},
};

const articlesReducer = (state = initialState, action) => {
  const { articles, isLoading } = action;
  switch (action.type) {
    case articleActionTypes.ARTICLES_FETCH:
      return { ...state, isLoading };
    case articleActionTypes.ARTICLES_FETCHED:
      return { articles, isLoading };

    default:
      return state;
  }
};

export default articlesReducer;
