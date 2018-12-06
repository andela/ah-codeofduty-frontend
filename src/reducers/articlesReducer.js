import { ActionTypes } from '../actions/articlesActions';

const initialState = {
  articles: [],
  isLoading: false,
};

const articlesReducer = (state = initialState, action) => {
  const { articles, isLoading } = action;
  switch (action.type) {
    case ActionTypes.ARTICLES_FETCH:
      return { ...state, isLoading };
    case ActionTypes.ARTICLES_FETCHED:
      return { articles, isLoading };
    default:
      return state;
  }
};

export default articlesReducer;
