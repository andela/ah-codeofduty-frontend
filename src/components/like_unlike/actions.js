import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from './constants';
import authUser from '../../utils/authUser';
import {urls,headerObject} from '../../apiEndpoints';


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
export const likesArticle = (slug,data) => (dispatch) => {
  dispatch(likeArticle());
  axios
    .post(urls.DISLIKE(slug),data, headerObject(token),)
    .then(response => {dispatch(likeArticleSuccess(response.data));
      toast.success("you have sucessfully liked this article", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
    })
    .catch(errors => {dispatch(likeArticleFailure(errors.response));
      toast.error("you have already liked this article", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
    });
};
export const dislikesArticle = (slug,data) => (dispatch) => {
  dispatch(likeArticle());
  axios
    .post(urls.DISLIKE(slug),data, headerObject(token),)
    .then(response => { dispatch(unlikeArticleSuccess(response.data));
      toast.success("you have sucessfully disliked this article", { autoClose: 3500, hideProgressBar: true },
      { position: toast.POSITION.TOP_CENTER, });
      })
    .catch(errors => {dispatch(unlikeArticleFailure(errors.response));
        toast.error('you have already dislike this article', { autoClose: 3500, hideProgressBar: true }, {
        position: toast.POSITION.TOP_CENTER, });
      });
};
