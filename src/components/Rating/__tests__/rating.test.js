import React from 'react';
import { Provider } from 'react-redux';
import { shallow, wrapper, mount } from 'enzyme';
import { Rating } from '../Rating';

it('should render correctly', () => {
  shallow(<Rating />);
});
