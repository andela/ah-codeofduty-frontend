import React from 'react';
import { shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import Comment from '../Comment';
import AllComments from '../AllComments'

describe('Comment Component', () => {
  const comments = [{body: 'my data',author:{username:"max"}, thread:[{body: "replies"}]}];
  // const data = [{body: 'my data',author:{username:"max"}, }];
  const postReply = {reply:{postReply:"reply"}}
  const slug = {article:{slug:"reply"}}
  const body  = "this"
  // const comments = [{data: "comment", author:{username:"max"}, thread:[{data: "replies"}]},]

const mock = configureStore();
const store = mock({
    AllComments: {
    getCommentSuccess: true,
    payload: {body: "uuuure"}
  },
});

const props = {
    commennts: [{
        body: 'my data',
        author:{
            username:"max"
        },
        thread:[{
            body: "replies"
        }]
    }],
    postComment: jest.fn(),
    slug: 'slug',
}

  it('should render the Comment Component correctly', () => {
    shallow(<AllComments store={store} {...props} />)
  });
});

