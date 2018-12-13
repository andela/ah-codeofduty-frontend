import {
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_INITIATED,
  CREATE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_INITIATED,
  EDIT_ARTICLE_SUCCESS,
  GET_ALL_ARTICLES_INITIATED,
  GET_ALL_ARTICLES_SUCCESS,
  GET_SPECIFIC_ARTICLE_INITIATED,
  GET_SPECIFIC_ARTICLE_SUCCESS,
} from './actionTypes';

export const createArticleSuccess = payload => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload,
});
export const createArticleError = payload => ({
  type: CREATE_ARTICLE_ERROR,
  payload,
});
export const createArticleInitiated = payload => ({
  type: CREATE_ARTICLE_INITIATED,
  payload,
});
export const getAllArticles = payload => ({
  type: GET_ALL_ARTICLES_SUCCESS,
  payload,
});
export const getArticlesInitiated = payload => ({
  type: GET_ALL_ARTICLES_INITIATED,
  payload,
});
export const getSpecificArticleInitiated = payload => ({
  type: GET_SPECIFIC_ARTICLE_INITIATED,
  payload,
});
export const getSpecificArticle = payload => ({
  type: GET_SPECIFIC_ARTICLE_SUCCESS,
  payload,
});
export const editArticleSuccess = payload => ({
  type: EDIT_ARTICLE_SUCCESS,
  payload,
});
export const editArticleError = payload => ({
  type: EDIT_ARTICLE_ERROR,
  payload,
});
export const editArticleInititated = payload => ({
  type: EDIT_ARTICLE_INITIATED,
  payload,
});
export const deleteArticleSuccess = payload => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload,
});
