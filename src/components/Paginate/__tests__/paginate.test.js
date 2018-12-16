import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Paginate } from '../Paginate';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    articlesCount: 5
  }

  const enzymeWrapper = shallow(<Paginate {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Paginate component mount', ()=>{
    const {enzymeWrapper} = setup();

    it('should render Paginate component correctly', () => {
        expect(enzymeWrapper.find('.pagination')).toBeDefined();
      });

    
})