import React from 'react';
import { shallow } from 'enzyme';
import {ReportArticleTest} from '../index';

const props = {
  slug: '',
};

describe('it should render', () => {
  it('should mount component', () => {
    shallow(<ReportArticleTest {...props} />);
  });
});
