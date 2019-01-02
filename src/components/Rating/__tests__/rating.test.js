import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../Navbar/Navbar';

it('Navbar should render correctly', () => {
  shallow(<Navbar />);
});
