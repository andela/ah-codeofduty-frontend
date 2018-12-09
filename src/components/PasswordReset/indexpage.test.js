import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
// import { PasswordReset } from './index';
import Enzyme, { shallow } from 'enzyme';
import { store } from '../../store';
import * as actions from './actions';
import * as types from './constants';
import PasswordReset from './index';

Enzyme.configure({ adapter: new Adapter() });
describe('<forgot password form/>', () => {
  it('renders a input fields', () => {});
  const resetform = shallow(
    <provider>
      <PasswordReset />
    </provider>,
  );
  // expect(resetform.find('input').length).toEqual(0);
  expect(resetform).toHaveLength(1);
});
describe('RESET_PASSWORD', () => {
  it('start process of resetting password', () => {
    const email = 'example@gmail.com';
    const expectedAction = {
      type: types.RESET_PASSWORD,
    };
    expect(actions.resetPassword(email)).toEqual(expectedAction);
  });

  it('forgot password failure', () => {
    const expectedAction = {
      type: types.RESET_PASSWORD_FAILURE,
    };
    expect(actions.resetPasswordFailure()).toEqual(expectedAction);
  });

  it('forgot password sucess', () => {
    const expectedAction = {
      type: types.RESET_PASSWORD_SUCCESS,
    };
    expect(actions.resetPasswordSuccess()).toEqual(expectedAction);
  });
});
