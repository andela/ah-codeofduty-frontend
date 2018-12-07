import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PasswordResetForm from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<PasswordResetForm />', () => {
  it('renders a input fields', () => {});
  const resetform = shallow(
    <provider>
      <PasswordResetForm />
    </provider>,
  );
  expect(resetform.find('input').length).toEqual(0);
});
