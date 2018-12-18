import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import { Tags } from '../Tags';

Enzyme.configure({ adapter: new Adapter() })

const props = {
    tags: ["math"],
    dispatch: jest.fn(),
  }

const setup = () => {
  const enzymeWrapper = mount(<Tags {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Tags component mount', ()=>{
    const {enzymeWrapper} = setup();

    it('should render Tags component correctly', () => {
        expect(enzymeWrapper.find('.Tags')).toBeDefined();
        expect(enzymeWrapper.find('button#math')).toHaveLength(1);
    });
      
    it('handles onclick page change', () => {
        const btn = enzymeWrapper.find('button#math');
        btn.simulate('click');
        const disp = enzymeWrapper.instance().props.dispatch;

        expect(disp.mock.calls.length).toBe(1);
      });

    
})