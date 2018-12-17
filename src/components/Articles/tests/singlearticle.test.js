import React from 'react';
import { shallow } from 'enzyme';
import SingleArticle from '../singleArticle';

describe('SingleArticle Component', () => {
  const article = {};

  it('should render singleArticle Component correctly', () => {
    shallow(<SingleArticle article={article} />)
  });
});
