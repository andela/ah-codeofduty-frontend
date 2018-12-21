import React from 'react';
import {Navbar} from '../../Navbar/Navbar'
import {Rating} from '../Rating';
import { shallow } from 'enzyme';

it('should render correctly', ()=>{
    shallow(<Rating />);
})
it('Navbar should render correctly', ()=>{
    shallow(<Navbar />);
})