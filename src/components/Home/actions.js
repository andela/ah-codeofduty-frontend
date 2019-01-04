import { types } from './types';
import getArticles from '../../utils/fetchArticles';
import { urls } from '../../apiEndpoints';

const recentFetching = () => ({
  type: types.RECENT_FETCHING,
  isLoading: true,
});

const recentFetched = ({results}) => ({
  type: types.RECENT_FETCHED,
  recentArticles: results,
  isLoading: false,
});

const popularFetching = () => ({
    type: types.POPULAR_FETCHING,
    isLoading: true,
  });

const popularFetched = ({results}) => ({
  type: types.POPULAR_FETCHED,
  popularArticles: results,
  isLoading: false,
});

export const fetchRecentArticles = () => dispatch => {
    console.log("hey, got called on recent");
    
    dispatch(recentFetching());
    getArticles(urls.RECENT_ARTICLES, recentFetched, dispatch);  
  }

export const fetchPopularArticles = () => dispatch => {
    console.log("hey, got called on popular");

    dispatch(popularFetching());
    getArticles(urls.POPULAR_ARTICLES, popularFetched, dispatch);  
  }
