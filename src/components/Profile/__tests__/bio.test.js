import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Bio from '../Bio';

Enzyme.configure({ adapter: new Adapter() })

describe('Render Bio component without crashing', ()=>{

    it('should render Bio component correctly', () => {
        const profile = {
            username: '',
            surname: '',
            last_name: '',
            bio: '',
        }
        shallow(<Bio showModal={()=>jest.fn()} profile={profile} following={0} followers={0}/>);
    });

})