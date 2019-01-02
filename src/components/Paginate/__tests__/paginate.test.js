import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import { Paginate } from '../Paginate';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    articlesCount: 5,
    dispatch: jest.fn(),
  };

  const enzymeWrapper = mount(<Paginate {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Paginate component mount', () => {
  const { enzymeWrapper } = setup();

  it('should render Paginate component correctly', () => {
    expect(enzymeWrapper.find('.pagination')).toBeDefined();
    expect(enzymeWrapper.find('.pages')).toBeDefined();
    expect(enzymeWrapper.find('.next')).toBeDefined();
    expect(enzymeWrapper.find('.prev')).toBeDefined();
  });

  it('handles onclick page change', () => {
    const btn = enzymeWrapper.find('.active-page');
    btn.simulate('click');
    const disp = enzymeWrapper.instance().props.dispatch;

    expect(disp.mock.calls.length).toBe(1);
  });
});
