import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../index';
import { Article } from '../article';

describe('Article Component', () => {
  const article = {
    author: { username: 'red' },
    title: 'this',
    body: 'body',
  };
  const slug = {
    slug: 'this',
  };
  const dispatch = jest.fn();
  const articlesPayload = {
    results: [{ author: 1 }],
  };

  it('should render the Articles Component correctly', () => {
    shallow(<Articles article={article} toggleEdit="" tags={[]} />);
  });

  it('should render Article Component correctly', () => {
    shallow(
      <Articles
        tags={[]}
        dispatch={dispatch}
        articlesPayload={articlesPayload}
        article={article}
        slug={slug}
        toggleEdit=""
      />,
    );
  });
});
