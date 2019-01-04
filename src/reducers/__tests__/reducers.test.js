import expect from 'expect';
import profileReducer, { initialState } from '../profileReducer';

describe('profile reducer', () => {
  const actions = (content) => {
    const newActions = { ...content };
    delete newActions.type;

    expect(profileReducer({}, content)).toEqual({
      ...newActions,
    });
  };

  const follow = (follows, followType) => {
    expect(profileReducer({}, { type: follows, follow: [] })).toEqual({
      [followType]: [],
    });
  };

  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle EDIT_PROFILE', () => {
    actions({ type: 'EDIT_PROFILE', showModal: true });
  });
  it('should handle PROFILE_FETCH', () => {
    actions({ type: 'PROFILE_FETCH', isLoading: true });
  });
  it('should handle PROFILE_FETCHED', () => {
    actions({ type: 'PROFILE_FETCHED', isLoading: false });
  });
  it('should handle FOLLOWERS_FETCHED', () => {
    follow('FOLLOWERS_FETCHED', 'followers');
  });
  it('should handle FOLLOWING_FETCHED', () => {
    follow('FOLLOWING_FETCHED', 'following');
  });
  it('should handle CANCEL_EDIT', () => {
    actions({ type: 'CANCEL_EDIT', showModal: false });
  });
  it('should handle UPDATE_PROFILE', () => {
    actions({ type: 'UPDATE_PROFILE', profile: { user: 'user' } });
  });
  it('should handle GET_ALL_TAGS', () => {
    actions({ type: 'GET_ALL_TAGS' });
  });
});
