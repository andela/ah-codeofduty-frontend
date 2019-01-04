import tagReducer, { initialState } from '../tagsReducer';
import { GET_ALL_TAGS } from '../../components/Articles/actionTypes';

const action = {
  action: {
    tags: '',
  },
};

const whatwewant = action.action.tags;

describe('Tag reducers', () => {
  it('should provide the initial state', () => {
    expect(tagReducer(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      tagReducer(initialState, { type: GET_ALL_TAGS, tags: whatwewant }).tags,
    ).toEqual('');
  });
});
