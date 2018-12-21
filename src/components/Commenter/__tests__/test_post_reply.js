import React from 'react';
import { shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import Commenter from '../Commenter';

describe('Comment Component', () => {
  const data = {data: {comment: 'my data'}};
  const slug = {article:{slug:"reply"}}

const mock = configureStore();
const store = mock({
    Commenter: {
    postCommentSuccess: true,
    payload: data
  },
});
const props  = {
  postComment: jest.fn(),
  slug: {slug}
}
const wrapper = shallow(<Commenter slug={slug} store={store} {...props}/>)
  it('should post the Comment Component ', () => {
     // wrapper.find("button").simulate('click');
    //  expect(props.postComment).toHaveBeenClicked();
  });
});