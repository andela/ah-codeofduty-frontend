import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../Navbar/Navbar';
import Comment from '../index';

describe('Average Component', () => {
  it('should render Average without throwing an error', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Navbar should render correctly', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
