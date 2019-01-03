import React from 'react';
import { shallow } from 'enzyme';
import SocialShare from "../share";

const props = {
  slug: '',
};

describe('componentDidMount', () => {
  it('calls componentDidMount', () => {
    shallow(<SocialShare {...props} />);
  });
});
