import articleReducer from '../articleReducer';
import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_INITIATED,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_INITIATED,
  GET_SPECIFIC_ARTICLE_SUCCESS,
  GET_SPECIFIC_ARTICLE_INITIATED,
  DELETE_ARTICLE_SUCCESS,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_INITIATED,
} from '../../components/Articles/actionTypes';

describe('articleReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      articlesPayload: {},
      createArticleSuccess: false,
      createArticleError: {},
      loading: false,
      addCommentSuccess: false,
      commentsPayload: {},
      articlePayload: {},
      userArticlesPayload: {},
      likeDislikeSuccess: false,
      likeDislikeError: {},
      confirmDelete: false,
      editArticleSuccess: false,
    };
  });

  it('should run initial state', () => {
    expect(articleReducer(initialState, {})).toEqual(initialState);
  });

  it('should return all articles', () => {
    const action = {
      type: GET_ALL_ARTICLES_SUCCESS,
      payload: [{ author: 1 }],
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      articlesPayload: action.payload,
    });
  });

  it('should set the loader when GET_ALL_ARTICLES_INITIATED is true', () => {
    const action = {
      type: GET_ALL_ARTICLES_INITIATED,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set CREATE_ARTICLE_SUCCESS to true when an article is posted successfully', () => {
    const action = {
      type: CREATE_ARTICLE_SUCCESS,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      createArticleSuccess: true,
    });
  });

  it('should add an error when an article is not successfully posted', () => {
    const postError = 'Please login and try again';
    const action = {
      type: CREATE_ARTICLE_ERROR,
      payload: postError,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      createArticleError: postError,
    });
  });

  it('should set the loader when CREATE_ARTICLE_INITIATED is true', () => {
    const action = {
      type: CREATE_ARTICLE_INITIATED,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return a single article', () => {
    const action = {
      type: GET_SPECIFIC_ARTICLE_SUCCESS,
      payload: { body: 'sweet and simple' },
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      articlePayload: action.payload,
    });
  });

  it('should set the loader when GET_SPECIFIC_ARTICLE_INITIATED is true', () => {
    const action = {
      type: GET_SPECIFIC_ARTICLE_INITIATED,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should update EDIT_ARTICLE_SUCCESS to true when an article is updated successfully', () => {
    const action = {
      type: EDIT_ARTICLE_SUCCESS,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      editArticleSuccess: true,
    });
  });

  it('should add an error when an article update is not successful', () => {
    const putError = 'Something went wrong';
    const action = {
      type: EDIT_ARTICLE_ERROR,
      payload: putError,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      editArticleError: putError,
    });
  });

  it('should set the loader when EDIT_ARTICLE_INITIATED is true', () => {
    const action = {
      type: EDIT_ARTICLE_INITIATED,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set DELETE_ARTICLE_SUCCESS to true when article has been deleted', () => {
    const action = {
      type: DELETE_ARTICLE_SUCCESS,
      payload: true,
    };
    const currentState = articleReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      confirmDelete: true,
    });
  });
});
