import axios from 'axios';
import { articleActionTypes } from './types';

export const articlesFetch = () => ({
  type: articleActionTypes.ARTICLES_FETCH,
  isLoading: true,
});

export const articlesFetched = articles => ({
  type: articleActionTypes.ARTICLES_FETCHED,
  isLoading: false,
  articles,
});

export const getArticles = url => (dispatch) => {
  dispatch(articlesFetch());
  return axios
    .get(url)
    .then((response) => {
      dispatch(articlesFetched(response.data));
    })
    .catch(error => console.log(error));
};
