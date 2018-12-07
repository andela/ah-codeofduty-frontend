import React from 'react';
import { shallow } from 'enzyme';
import { GoogleTest } from "../GoogleButton";

const props = {
    isLoggedIn: false,
    googleLoginUser: jest.fn()
};

const wrapper = shallow(<GoogleTest {...props}/>);


it('should call google login when a token is passed', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signup');
    const userToken = 'token';
    wrapper.instance().signup(userToken);
    expect(spy).toHaveBeenCalled();
});

describe('signup method', () => {
    it('should call gooogle login when a token is passed', () => {
        wrapper.instance().signup('token');
        expect(props.googleLoginUser).toHaveBeenCalled();
    });
});

it('should call signup method when a response is passed', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signup');
    const response = {
        tokenId: 'token',
    };
    wrapper.instance().handleGoogleResponse(response);
    expect(spy).toBeCalled();
});
