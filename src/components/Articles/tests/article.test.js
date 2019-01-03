import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../index';

describe('Article Component', () => {
  const article = { author: { username: 'red' }, body: 'body' };

  it('should render the Article Component correctly', () => {
    shallow(<Articles article={article} toggleEdit="" tags={[]} />);
  });
});
