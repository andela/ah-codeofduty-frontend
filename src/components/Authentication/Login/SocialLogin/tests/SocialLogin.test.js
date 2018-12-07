import React from 'react';
import { shallow } from 'enzyme'
import { SocialLogin } from "../SocialLogin";

const wrapper = shallow(<SocialLogin/>)

it('renders the facebook button', () => {
    expect(wrapper.find('.row').length).toEqual(1)
});
