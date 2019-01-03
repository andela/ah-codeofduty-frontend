import { types } from '../components/Home/types';
const initialState = {
    recentArticles: [],
    popularArticles: [],
    isLoading: false,
}

const homeReducer = (state = initialState, action) => {
  const {isLoading, recentArticles, popularArticles} = action;
  switch (action.type) {
    case types.RECENT_FETCHING:
      return { ...state, isLoading };
    case types.RECENT_FETCHED:
      return { ...state, isLoading, recentArticles};
    case types.POPULAR_FETCHING:
      return { ...state, isLoading };
    case types.POPULAR_FETCHED:
      return { ...state, isLoading, popularArticles};
    default:
      return state;
    }
}

export default homeReducer;