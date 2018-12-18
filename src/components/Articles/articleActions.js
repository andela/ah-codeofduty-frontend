import { toast } from "react-toastify";
import axios from "axios";
import authUser from "../../utils/authUser";
import { urls, headerObject } from "../../apiEndpoints";

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
  getAllTags,
} from './actionCreators';

const { token } = authUser();

export const postArticle = postData => dispatch => {
  dispatch(createArticleInitiated(true));
  return axios
    .post(urls.ARTICLES, postData, headerObject(token))
    .then(response => {
      dispatch(createArticleSuccess(true));
      toast.success(
        response.statusText,
        { autoClose: 3500, hideProgressBar: true },
        {
          position: toast.POSITION.TOP_CENTER
        }
      );
    })
    .catch(() => {
      const errorMessage = "Please login and try again";
      dispatch(createArticleError(errorMessage));
    });
};

export const fetchArticles = url => dispatch => {
  dispatch(getArticlesInitiated(true));
  return axios.get(url).then(response => {
    console.warn("Look, I fetched articles!", response.data);
    dispatch(getAllArticles(response.data));
  });
};

export const fetchSpecificArticle = slug => dispatch => {
  dispatch(getSpecificArticleInitiated(true));
  return axios.get(urls.ARTICLE(slug)).then(response => {
    dispatch(getSpecificArticle(response.data));
    localStorage.setItem("currentArticle", slug);
  });
};

export const updateArticle = (slug, newData) => dispatch => {
  toast.dismiss();
  dispatch(editArticleInititated(true));
  return axios
    .put(urls.ARTICLE(slug), newData, headerObject(token))
    .then(response => {
      dispatch(editArticleSuccess(true));
      toast.success(response.data.message, {
        autoClose: 3500,
        hideProgressBar: true
      });
    })
    .catch(error => {
      let errorMessage = "";
      if (error.response.status === 403) {
        errorMessage = "Please login and try again";
      }
      if (error.response.status === 404) {
        errorMessage = "Please enter valid text in the body";
      }
      dispatch(editArticleError(errorMessage));
      toast.error(errorMessage, { autoClose: false, hideProgressBar: true });
    });
};

export const deleteArticle = slug => dispatch => {
  axios.delete(urls.ARTICLE(slug), headerObject(token)).then(() => {
    dispatch(deleteArticleSuccess(true));
    toast.success("The article was deleted!", {
      autoClose: 3500,
      hideProgressBar: true
    });
  });
};

export const fetchTags = () => dispatch => {
  axios.get(urls.TAGS)
  .then(response => dispatch(getAllTags(response.data.tags))
  )
  .catch(error => console.log(error))
}
