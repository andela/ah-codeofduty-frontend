import { toast } from "react-toastify";
import axios from "axios";
import authUser from "../../utils/authUser";

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
  getSpecificArticleInitiated
} from "./actionCreators";

const { token } = authUser();

const url = "https://ah-codeofduty-staging.herokuapp.com/api/articles/";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
};

export const postArticle = postData => dispatch => {
  dispatch(createArticleInitiated(true));
  return axios
    .post(url, postData, config)
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

export const fetchArticles = () => dispatch => {
  dispatch(getArticlesInitiated(true));
  return axios.get(url).then(response => {
    dispatch(getAllArticles(response.data.results));
  });
};

export const fetchSpecificArticle = slug => dispatch => {
  dispatch(getSpecificArticleInitiated(true));
  return axios
    .get(`https://ah-codeofduty-staging.herokuapp.com/api/articles/${slug}/`)
    .then(response => {
      dispatch(getSpecificArticle(response.data));
      localStorage.setItem("currentArticle", slug);
    });
};

export const updateArticle = (slug, newData) => dispatch => {
  toast.dismiss();
  dispatch(editArticleInititated(true));
  return axios
    .put(
      `https://ah-codeofduty-staging.herokuapp.com/api/articles/${slug}/`,
      newData,
      config
    )
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
  axios
    .delete(
      `https://ah-codeofduty-staging.herokuapp.com/api/articles/${slug}/`,
      config
    )
    .then(() => {
      dispatch(deleteArticleSuccess(true));
      toast.success("The article was deleted!", {
        autoClose: 3500,
        hideProgressBar: true
      });
    });
};
