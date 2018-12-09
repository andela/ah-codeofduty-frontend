// import React from 'react';
// import Enzyme from 'enzyme';
// import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import PasswordResetForm from '.';

// Enzyme.configure({ adapter: new Adapter() });

// describe('<PasswordResetForm />', () => {
//   it('renders a input fields', () => {});
//   const resetform = shallow(
//     <provider>
//       <PasswordResetForm />
//     </provider>,
//   );
//   expect(resetform.find('input').length).toEqual(0);
// });

import expect from 'expect';
import * as actions from './actions';
import * as types from './constants';

describe('Reset saved password i database', () => {
  it('start process of resetting password', () => {
    const email = 'example@gmail.com';
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION,
    };
    expect(actions.resetPasswordAction(email)).toEqual(expectedAction);
  });

  it('reset password failure', () => {
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION_FAILURE,
    };
    expect(actions.resetPasswordActionFailure()).toEqual(expectedAction);
  });

  it('reset password sucess', () => {
    const expectedAction = {
      type: types.RESET_PASSWORD_ACTION_SUCCESS,
    };
    expect(actions.resetPasswordActionSuccess()).toEqual(expectedAction);
  });
});
