import axios from 'axios';
import * as types from './constants';
import authUser from '../../utils/authUser';

export const likeArticle = () => ({
  type: types.LIKE_ARTICLE,
});

export const likeArticleSuccess = result => ({
  type: types.LIKE_ARTICLE_SUCCESS,
  result,
});

export const likeArticleFailure = errors => ({
  type: types.LIKE_ARTICLE_FAILURE,
  errors,
});

export const unlikeArticle = () => ({
  type: types.UNLIKE_ARTICLE,
});

export const unlikeArticleSuccess = result => ({
  type: types.UNLIKE_ARTICLE_SUCCESS,
  result,
});

export const unlikeArticleFailure = errors => ({
  type: types.UNLIKE_ARTICLE_FAILURE,
  errors,
});

const { token } = authUser();
export const likesArticle = (slug, data) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  dispatch(likeArticle());

  axios
    .post(`https://ah-codeofduty-staging.herokuapp.com/api/articles/${slug}/like/`, data, {
      headers,
    })
    .then(response => dispatch(likeArticleSuccess(response.data)))
    .catch(errors => dispatch(likeArticleFailure(errors.response)));
};

export const dislikesArticle = (slug, data) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  dispatch(likeArticle());
  axios
    .post(`https://ah-codeofduty-staging.herokuapp.com/api/articles/${slug}/like/`, data, {
      headers,
    })
    .then(response => dispatch(unlikeArticleSuccess(response.data)))
    .catch(errors => dispatch(unlikeArticleFailure(errors.response)));
};
