import React from 'react';
import { shallow } from 'enzyme';
import Article from '../article';

describe('Article Component', () => {
  const article = {author: {username: 'red'}, body: 'body'};

  it('should render the Article Component correctly', () => {
    shallow(<Article article={article} toggleEdit={''}/>);
  });
});
