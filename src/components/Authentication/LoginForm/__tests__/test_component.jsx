import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginForm } from '../LoginForm';

Enzyme.configure({ adapter: new Adapter() });

const foo = jest.fn();

describe('test login form', () => {
  const props = {
    login: jest.fn(),
    isLoginPending: false,
    isLoginSuccess: false,
    onSubmit: { foo },
  };
  const wrapper = shallow(<LoginForm {...props} />);
  it('renders login form', () => {
    expect(wrapper.find('.login-form').length).toBe(1);
  });
});

describe('test email field', () => {
  const props = {
    login: jest.fn(),
    isLoginPending: false,
    isLoginSuccess: false,
  };
  const wrapper = shallow(<LoginForm {...props} />);
  it('renders email field', () => {
    expect(wrapper.find('#login-email').length).toBe(1);
  });
});

describe('test password field', () => {
  const props = {
    login: jest.fn(),
    isLoginPending: false,
    isLoginSuccess: false,
  };
  const wrapper = shallow(<LoginForm {...props} />);
  it('renders password field', () => {
    expect(wrapper.find('#login-password').length).toBe(1);
  });
});


describe('test login button', () => {
  const props = {
    login: jest.fn(),
    isLoginPending: false,
    isLoginSuccess: false,
  };
  const wrapper = shallow(<LoginForm {...props} />);
  it('renders login button', () => {
    expect(wrapper.find('.login-btn').length).toBe(1);
  });
});


const mock = configureStore();
const store = mock({
  LoginForm: {
    isLoginPending: true,
    isLoginSuccess: true,
  },
});

describe('test login container', () => {
  const props = {
    login: jest.fn(),
    isLoginPending: false,
    isLoginSuccess: false,
  };
  it('tests container mounts', () => {
    const container = shallow(<LoginForm store={store} />);
    expect(container.find('.login-btn').length).toBe(1);
  });
  it('onClick submit', () => {
    const container = shallow(<LoginForm {...props}/>);
    const spy = jest.spyOn(container.instance(), "handleSubmit");
    container.find(".loginForm").simulate("submit", { preventDefault() {} }, spy);
    expect(spy).toHaveBeenCalled();
  });
});
