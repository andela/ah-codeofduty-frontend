import {LikesDislikes} from './index'
import React from 'react';
import { shallow } from 'enzyme';
import * as types from './constants';
import * as actions from './actions';
import likeDislikeReducer from './reducer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

Enzyme.configure({adapter: new Adapter()});

const test = (type, action) => {
    const expected = {type}
expect(action).toEqual(expected)
}

describe("test like and dislike",()=>{
    it('test like no action returned', () => {
        test(types.LIKE_ARTICLE, actions.likeArticle())});
    it('test like action success', () => {
        test(types.LIKE_ARTICLE_SUCCESS, actions.likeArticleSuccess())});
    it('test like action failure', () => {
        test(types.LIKE_ARTICLE_FAILURE, actions.likeArticleFailure())});
    it('test dislike no action returned', () => {
        test(types.UNLIKE_ARTICLE, actions.unlikeArticle())});
    it('test dislike action success', () => {
        test(types.UNLIKE_ARTICLE_SUCCESS, actions.unlikeArticleSuccess())});
    it('test dislike action failure', () => {
        test(types.UNLIKE_ARTICLE_FAILURE, actions.unlikeArticleFailure())});
});

describe('likeDislikeReducer reducer', () => {
   const initialState = {
    likes: null,
    fetching: false,
    fetched: false,
    errors: null,
  };
   it('should return the initial state', () => {
       expect(likeDislikeReducer(initialState, {})).toEqual(initialState);
   });

   it('should handle LIKE_ARTICLE', () => {
       expect(
           likeDislikeReducer(initialState, {
               type: types.LIKE_ARTICLE
           })
       ).toEqual({
           ...initialState,
           fetching: true
       });

       expect(
           likeDislikeReducer(initialState, {
               type: types.LIKE_ARTICLE_SUCCESS,
               result: true
           })
       ).toEqual({
           ...initialState,
           fetched: true,
           likes: true
       });

       expect(
           likeDislikeReducer(initialState, {
               type: types.UNLIKE_ARTICLE_FAILURE,
               errors: 'This is a mock error'
           })
       ).toEqual({
           ...initialState,
           errors: 'This is a mock error'
       });
   });

});



describe('test likes component' , () => {
    const props = {
        like: jest.fn(),
        fetched: false,
    }
    const wrapprer = shallow (<LikesDislikes {...props} />);
    it ('renders likes likes component', () => {
        expect(wrapprer.find('#thumbsup').length).toBe(1);
    });
});

