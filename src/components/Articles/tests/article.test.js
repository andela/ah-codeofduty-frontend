import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Article from '../article';
import store from '../../../store';

describe('Article Component', () => {
  const article = {
    author: { username: 'red' },
    title: 'this',
    body: 'body',
  };
  const slug = {
    slug: 'this',
  };

  it('should render the Article Component correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Article article={article} slug={slug} toggleEdit="" />
      </Provider>,
    );
  });
});
