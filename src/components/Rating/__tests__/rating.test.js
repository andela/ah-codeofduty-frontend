import React from 'react';
import {Rating} from '../Rating';
import { shallow } from 'enzyme';

it('should render correctly', ()=>{
    shallow(<Rating />);
})