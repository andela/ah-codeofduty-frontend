import {LikesDislikes} from './index'
import React from 'react';
import { shallow } from 'enzyme';
import * as type from './constants';
import * as actions from './actions';

const test = (type, action) => {
    const expected = {type}
expect(action).toEqual(expected)
}
describe("test like and dislike",()=>{
    it('test like no action returned', () => {
        test(type.LIKE_ARTICLE, actions.likeArticle())});
    it('test like action success', () => {
        test(type.LIKE_ARTICLE_SUCCESS, actions.likeArticleSuccess())});
    it('test like action failure', () => {
        test(type.LIKE_ARTICLE_FAILURE, actions.likeArticleFailure())});
    it('test dislike no action returned', () => {
        test(type.UNLIKE_ARTICLE, actions.unlikeArticle())});
    it('test dislike action success', () => {
        test(type.UNLIKE_ARTICLE_SUCCESS, actions.unlikeArticleSuccess())});
    it('test dislike action failure', () => {
        test(type.UNLIKE_ARTICLE_FAILURE, actions.unlikeArticleFailure())});
});


