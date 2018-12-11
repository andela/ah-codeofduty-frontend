import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import PasswordReset from './index';
import PasswordResetForm from '../PasswordResetForm';

Enzyme.configure({ adapter: new Adapter() });
describe('<forgot password form/>', () => {
  it('renders a input fields', () => {});
  const resetform = shallow(
    <provider>
      <PasswordReset />
    </provider>,
  );
  expect(resetform).toHaveLength(1);
});
