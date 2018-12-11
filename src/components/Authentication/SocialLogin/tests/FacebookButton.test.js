import React from 'react';
import { shallow } from 'enzyme';
import { FacebookTest } from '../FacebookButton';

const props = {
    isLoggedIn: false,
    socialAuthentication: jest.fn()
};

const wrapper = shallow(<FacebookTest {...props}/>);

it('should call facebook login when a token is passed', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signup');
    const userToken = 'token';
    wrapper.instance().signup(userToken);
    expect(spy).toHaveBeenCalled();
});

describe('signup method', () => {
    it('should call facebook login when a token is passed', () => {
        wrapper.instance().signup('token');
        expect(props.socialAuthentication).toHaveBeenCalled();
    });
});

it('should call signup method when a response is passed', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signup');
    const response = {
        tokenId: 'token',
    };
    wrapper.instance().handleFacebookResponse(response);
    expect(spy).toBeCalled();
});
