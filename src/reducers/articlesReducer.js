import { articleActionTypes } from '../actions/types';

const initialState = {
  articles: [],
  isLoading: false,
  next: null,
  prev: null,
  articlesCount: 0,
};

const articlesReducer = (state = initialState, action) => {
  const {
    articles, isLoading, prev, next, articlesCount,
  } = action;

  switch (action.type) {
    case articleActionTypes.ARTICLES_FETCH:
      return { ...state, isLoading };
    case articleActionTypes.ARTICLES_FETCHED:
      return {
        ...state,
        articles,
        prev,
        next,
        articlesCount,
        isLoading,
      };
    default:
      return state;
  }
};

export default articlesReducer;
