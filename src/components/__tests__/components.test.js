import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Button from '../Profile/Button';
import Avatar from '../Profile/Avatar';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import Columns from '../columns/columns';
import Input from '../Input/Input';

Enzyme.configure({ adapter: new Adapter() })

describe('Render Components without crashing', ()=>{

    it('should render Button component correctly', () => {
        shallow(<Button clicked={()=>jest.fn()}> Hello </Button>);
    });

    it('should render Modal component correctly', () => {
        shallow(<Modal cancel={()=>jest.fn()} show={()=>jest.fn()}> Testing </Modal>);
    });

    it('should render Backdrop component correctly', () => {
        shallow(<Backdrop show={()=>jest.fn()} clicked={()=>jest.fn()}/>);
    });

    it('should render Columns component correctly', () => {
        shallow(<Columns follow="following" stats={0} classes="testing"/>);
    });

    it('should render Input component correctly', () => {
        const values = { 
            name: '',
            type: '',
            placeholder: '',
            value: '',
        };
        shallow(<Input changed={()=>jest.fn()} values={values}/>);
    });

    it('should render Avatar component correctly', () => {
        shallow(<Avatar title='' alt='' source=''/>);
    });


})