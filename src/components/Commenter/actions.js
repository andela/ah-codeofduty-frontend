import {
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAILURE,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAILURE,
    REPLY_POST_FAILURE,
    REPLY_POST_SUCCESS,
} from './actionTypes';


export const postCommentSuccess = payload => ({
    type: COMMENT_POST_SUCCESS,
    payload,
  });

export const postCommentFailure= payload => ({
    type: COMMENT_POST_FAILURE,
    payload,
    });

export const getCommentSuccess = payload => ({
    type: COMMENT_GET_SUCCESS,
    payload,
    });

export const getCommentFailure= payload => ({
    type: COMMENT_GET_FAILURE,
    payload,
    });

export const postReplySuccess = payload => ({
    type: REPLY_POST_SUCCESS,
    payload,
})

export const postReplyFailure = payload => ({
    type: REPLY_POST_FAILURE,
    payload,
})