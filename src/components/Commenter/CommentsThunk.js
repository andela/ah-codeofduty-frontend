import axios from 'axios';
import authUser from '../../utils/authUser';
import {urls, headerObject} from '../../apiEndpoints'
import {
    postCommentSuccess,
    postCommentFailure,
    getCommentSuccess,
    getCommentFailure,
    postReplySuccess,
    postReplyFailure,

} from './actions'

const {token} = authUser()
export const postComment = (slug, data) => (dispatch) => {
    console.log(data)
    axios
      .post(urls.COMMENTS(slug), data, headerObject(token))
      .then((response) => {
        console.log(response, '>>>>>>REesdata')
        dispatch(postCommentSuccess(response.data))
        dispatch(getComment(slug))
      })
      .catch(error => dispatch(postCommentFailure(error.response)));
  };

  export const getComment = (slug) => (dispatch) => {
    axios
      .get(urls.COMMENTS(slug), headerObject(token))
      .then((response) => {
        dispatch(getCommentSuccess(response.data))
        localStorage.setItem('commentsCount', response.data[1].commentsCount)
      })
      .catch(error => dispatch(getCommentFailure(error.response)));
  };

export const postReply  = (slug, commentId, data) => dispatch =>{
    axios
    .post(urls.REPLY(slug, commentId), data, headerObject(token))
    .then((response) => {
      console.log(response, '>>>>>>REPLY')
      dispatch(postReplySuccess(response.data))
      dispatch(getComment(slug))
    })
    .catch(error => dispatch(postReplyFailure(error.response)));
};





