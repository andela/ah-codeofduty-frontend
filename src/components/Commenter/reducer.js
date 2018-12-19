import {
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAILURE,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAILURE,
    REPLY_POST_FAILURE,
    REPLY_POST_SUCCESS,
} from './actionTypes';


export const initialState = {
    isPostCommentSuccess: false,
    isPostCommentFailure:false,
    isGetCommentSuccess: false,
    isGetCommentFailure:false,
    isReplyPostSuccess: false,
    isReplyPostFailure: false,
    comments: [],
    replies: [],
    errors: []
  };

  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case COMMENT_POST_SUCCESS:
        return {
            ...state,
            isPostCommentSuccess: true,
        };
        case COMMENT_POST_FAILURE:
        return {
            ...state,
            isPostCommentFailure: true,
            errors: action.payload,
        };
        case COMMENT_GET_SUCCESS:
        return {
            ...state,
            isGetCommentSuccess: true,
            comments: action.payload.Message ? [] : action.payload[0].comments,
        };
        case COMMENT_GET_FAILURE:
        return {
            ...state,
            isGetCommentFailure: true,
            errors: action.payload,
        };
        case REPLY_POST_SUCCESS:
        return {
            ...state,
            isReplyPostSuccess: true,
            reply: action.payload,
        };
        case REPLY_POST_FAILURE:
        return {
            ...state,
            isReplyPostFailure: true,
            errors: action.payload,
        };
      default:
        return state;
    }
  };

export default commentReducer;
