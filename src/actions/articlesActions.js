import axios from 'axios';
import { articleActionTypes } from './types';

export const articlesFetch = () => ({
  type: articleActionTypes.ARTICLES_FETCH,
  isLoading: true,
});

export const articlesFetched = (data) => {
  const { results, links, articlesCount } = data;
  const { prev, next } = links;
  return {
    type: articleActionTypes.ARTICLES_FETCHED,
    isLoading: false,
    articles: results,
    prev,
    next,
    articlesCount,
  };
};

export const getArticles = url => (dispatch) => {
  dispatch(articlesFetch());
  return axios
    .get(url)
    .then((response) => {
      const { data } = response;
      dispatch(articlesFetched(data));
    })
    .catch(error => console.log(error));
};
