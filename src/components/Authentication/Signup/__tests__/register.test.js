import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../Register';
import store from '../../../../store';

configure({ adapter: new Adapter() });
const email = 'test@email.com';

it('renders Register component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Register />
      </Router>
    </Provider>,
  );
  const node = wrapper.find('#email');
  node.simulate('change', {
    target: { name: 'email', value: email },
  });
  expect(node.instance().value).toBe(email);
  wrapper.find('#signupform').simulate('submit', { preventDefault() {} });
});
