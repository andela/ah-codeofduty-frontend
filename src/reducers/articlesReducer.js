import { articleActionTypes } from '../actions/types';

const initialState = {
  tags: [],
  articles: [],
  isLoading: false,
  next: null,
  prev: null,
  articlesCount: 0,
};

const articlesReducer = (state = initialState, action) => {
  const {
    articles, isLoading, prev, next, articlesCount, tags,
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
    case articleActionTypes.TAGS_FETCHED:
      return { ...state, tags };

    default:
      return state;
  }
};

export default articlesReducer;
