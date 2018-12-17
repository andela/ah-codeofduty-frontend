import React from 'react';
import { shallow } from 'enzyme';
import { Articles } from '../articles';

describe('Articles Component', () => {
  const fetchArticles = jest.fn();
  const articlesPayload = {
    results: [
      { author: 1 },
    ],
  };
  it('should render articles Component correctly', () => {
    shallow(<Articles fetchArticles={fetchArticles} articlesPayload={articlesPayload} />,
    );
  });
});
