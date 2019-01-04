import React from 'react';
 
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import { Home } from '../Home';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    recentArticles: [],
    popularArticles: [],
    dispatch: jest.fn(),
};

describe('Render home without crashing', () => {
  it('should render home component correctly', () => {
    shallow(<Home {...props}/>);
  });
});
