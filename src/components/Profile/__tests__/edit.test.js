import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { EditTest } from '../Edit/Edit';

describe('ArticleForm component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const props = {
    profile: {},
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<EditTest {...props}/>);
  });

  it('renders without crashing', () => {
    shallow(<EditTest {...props} />);
  });
});
