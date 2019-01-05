import bookmarkArticlesReducer, { initialState } from '../bookmarkReducer';
import {
  BOOKMARK_ARTICLE,
  BOOKMARK_ARTICLE_FAILURE,
} from '../../actions/types';

const action = {
  action: {
    isBookmarking: '',
  },
};

const bookmark = action.action.isBookmarking;

describe('Bookmark reducers', () => {
  it('should provide the initial state', () => {
    expect(bookmarkArticlesReducer(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      bookmarkArticlesReducer(initialState, {
        type: BOOKMARK_ARTICLE,
        isBookmarking: bookmark,
      }).isBookmarking,
    ).toEqual(true);
  });

  it('should add data to the state', () => {
    expect(
      bookmarkArticlesReducer(initialState, {
        type: BOOKMARK_ARTICLE_FAILURE,
        isBookmarking: bookmark,
      }).isBookmarking,
    ).toEqual(false);
  });
});
