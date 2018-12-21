import * as actions from '../actions';
import * as types from '../actionTypes';


describe('Comment Actions', () => {
  describe('comment post success action creator', () => {
    it('should return an action type COMMENT POST SUCCESS of the user', () => {
      const payload = { body: 'some user information', data: 'yes we are just testing' };
      const expectedAction = {
        type: types.COMMENT_POST_SUCCESS,
        payload,
      };
      expect(actions.postCommentSuccess(payload)).toEqual(expectedAction);
    });
  });

  describe('comment post error action creator', () => {
    it('should return an action type COMMENT POST FAILURE of the user', () => {
      const payload = {errors:"some",};
      const expectedAction = {
        type: types.COMMENT_POST_FAILURE,
        payload,
      };
      expect(actions.postCommentFailure(payload)).toEqual(expectedAction);
    });
});

    describe('comment get success action creator', () => {
        it('should return an action type COMMENT GET SUCCESS of the user', () => {
          const payload = {body:"some data",};
          const expectedAction = {
            type: types.COMMENT_GET_SUCCESS,
            payload,
          };
          expect(actions.getCommentSuccess(payload)).toEqual(expectedAction);
        });
  });

  describe('comment get error action creator', () => {
    it('should return an action type COMMENT GET FAILURE of the user', () => {
      const payload = {errors:"some errors",};
      const expectedAction = {
        type: types.COMMENT_GET_FAILURE,
        payload,
      };
      expect(actions.getCommentFailure(payload)).toEqual(expectedAction);
    });
});

describe('reply post success action creator', () => {
    it('should return an action type COMMENT POST SUCCESS of the user', () => {
      const payload = { body: 'some user information', data: 'yes we are just testing' };
      const expectedAction = {
        type: types.REPLY_POST_SUCCESS,
        payload,
      };
      expect(actions.postReplySuccess(payload)).toEqual(expectedAction);
    });
  });

  describe('comment post error action creator', () => {
    it('should return an action type COMMENT POST FAILURE of the user', () => {
      const payload = {errors:"some",};
      const expectedAction = {
        type: types.REPLY_POST_FAILURE,
        payload,
      };
      expect(actions.postReplyFailure(payload)).toEqual(expectedAction);
    });
});

});

