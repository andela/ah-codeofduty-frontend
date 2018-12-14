import React from 'react';
import { shallow } from 'enzyme';
import ArticlesList from '../articleList';

describe('ArticlesList Component', () => {
  const articles = [{ author: 1 }];

  it('should render articleList Component correctly', () => {
    shallow(<ArticlesList articles={articles} />,
    );
  });
});
