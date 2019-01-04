import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
import { EditTest } from '../Edit/Edit';

jest.mock('react-router-dom');

describe('Edit component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const props = {
    profile: { surname: 'name', last_name: 'mane', bio: 'yaba' },
    showUpload: jest.fn(),
  };

  const getEvent = () => ({
    preventDefault: jest.fn(),
  });

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<EditTest {...props} />);
  });

  it('renders without crashing', () => {
    shallow(<EditTest {...props} />);
  });

  it('should show upload', () => {
    wrapper.instance().showUpload(getEvent());
    expect(wrapper.state().username).toEqual('');
  });

  it('should render div', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditTest {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
