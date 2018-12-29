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
  GET_ALL_TAGS,
} from '../components/Articles/actionTypes';

const initialState = {
  loading: false,
  articlesPayload: {},
  createArticleSuccess: false,
  createArticleError: {},
  articlePayload: {},
  editArticleSuccess: false,
  editArticleInitiated: false,
  editArticleError: {},
  articlesCount: 0,
  tags: [],
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        createArticleSuccess: action.payload,
        loading: false,
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        createArticleError: action.payload,
        loading: false,
      };
    case CREATE_ARTICLE_INITIATED:
      return {
        ...state,
        loading: action.payload,
        createArticleSuccess: false,
      };
    case GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articlesPayload: action.payload,
        articlesCount: action.articlesCount,
        loading: false,
      };
    case GET_ALL_ARTICLES_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SPECIFIC_ARTICLE_SUCCESS:
      return {
        ...state,
        articlePayload: action.payload,
        loading: false,
        editArticleSuccess: false,
      };
    case GET_SPECIFIC_ARTICLE_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        editArticleSuccess: action.payload,
        loading: false,
      };
    case EDIT_ARTICLE_ERROR:
      return {
        ...state,
        editArticleError: action.payload,
        loading: false,
      };
    case EDIT_ARTICLE_INITIATED:
      return {
        ...state,
        loading: action.payload,
        editArticleSuccess: false,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmDelete: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
