import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-15';
import { PasswordReset } from './index';
import { store } from '../../store';

const email = 'maps@maps.com';
configure({ adapter: new Adapter() });

it('renders ForgotPassword component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <PasswordReset />
      </Router>
    </Provider>,
  );
  const node = wrapper.find('#email');
  node.simulate('change', {
    target: { name: 'email', value: email },
  });
  expect(node.instance().value).toBe(email);
  wrapper.find('#passwordreset').simulate('submit', { preventDefault() {} });
});
