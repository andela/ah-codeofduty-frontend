import { toast } from 'react-toastify';
import axios from 'axios';
import authUser from '../../utils/authUser';
import { urls, headerObject } from '../../apiEndpoints';

import {
  createArticleError,
  createArticleInitiated,
  createArticleSuccess,
  deleteArticleSuccess,
  editArticleError,
  editArticleInititated,
  editArticleSuccess,
  getAllArticles,
  getArticlesInitiated,
  getSpecificArticle,
  getSpecificArticleInitiated,
} from './actionCreators';

const { token } = authUser();

export const postArticle = postData => (dispatch) => {
  dispatch(createArticleInitiated(true));
  return axios.post(urls.ARTICLES, postData, headerObject(token))
    .then((response) => {
      dispatch(createArticleSuccess(true));
      toast.success(
        response.statusText,
        { autoClose: 3500, hideProgressBar: true },
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
    })
    .catch(() => {
      const errorMessage = 'Please login and try again';
      dispatch(createArticleError(errorMessage));
    });
};

export const fetchArticles = (url) => (dispatch) => {
  dispatch(getArticlesInitiated(true));
  return axios.get(url)
    .then((response) => {
      console.warn("Look, I fetched articles!", response.data)
      dispatch(getAllArticles(response.data));
    });
};

export const fetchSpecificArticle = slug => (dispatch) => {
  dispatch(getSpecificArticleInitiated(true));
  return axios.get(urls.ARTICLE(slug))
    .then((response) => {
      dispatch(getSpecificArticle(response.data));
    });
};

export const updateArticle = (slug, newData) => (dispatch) => {
  toast.dismiss();
  dispatch(editArticleInititated(true));
  return axios.put(urls.ARTICLE(slug), newData, headerObject(token))
    .then((response) => {
      dispatch(editArticleSuccess(true));
      toast.success(
        response.data.message,
        { autoClose: 3500, hideProgressBar: true },
      );
    })
    .catch((error) => {
      let errorMessage = '';
      if (error.response.status === 403) {
        errorMessage = 'Please login and try again';
      }
      if (error.response.status === 404) {
        errorMessage = 'Please enter valid text in the body';
      }
      dispatch(editArticleError(errorMessage));
      toast.error(errorMessage, { autoClose: false, hideProgressBar: true });
    });
};

export const deleteArticle = slug => (dispatch) => {
  axios.delete(urls.ARTICLE(slug), headerObject(token))
    .then(() => {
      dispatch(deleteArticleSuccess(true));
      toast.success(
        'The article was deleted!',
        { autoClose: 3500, hideProgressBar: true },
      );
    });
};
