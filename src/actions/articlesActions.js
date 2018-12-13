import axios from 'axios';
import { articleActionTypes } from './types';
import { urls } from '../apiEndpoints';

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

export const tagsFetched = tags => ({
  type: articleActionTypes.TAGS_FETCHED,
  tags,
});

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

export const getTags = () => (dispatch) => {
  axios.get(urls.TAGS).then((response) => {
    dispatch(tagsFetched(response.data.tags));
  });
};
