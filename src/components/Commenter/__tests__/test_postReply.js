import React from 'react';
import { shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import PostReply from '../PostReply';
import { postReply } from '../CommentsThunk';

describe('Comment Component', () => {
  const data = {data: {comment: 'my data'}};
  const slug = {article:{slug:"reply"}}

const mock = configureStore();
const store = mock({
    PostReply: {
        postReplySuccess: true,
        payload: data
  },
});

  it('should render the Comment Component correctly', () => {
     shallow(<postReply  slug={slug} store={store}/>)
  });
});
