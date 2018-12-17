import React from 'react';
import { shallow } from 'enzyme';
import { DeleteModal } from '../deleteModal';

describe('DeleteModal Component', () => {
  let wrapper;
  const confirmDelete = true;
  const deleteArticle = jest.fn();
  const slug = 'react-redux';

  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });

  beforeEach(() => {
    wrapper = shallow(
        <DeleteModal
            slug={slug}
            confirmDelete={confirmDelete}
            deleteArticle={deleteArticle}
        />,
    );
  });

  it('should render the DeleteModal Component correctly', () => {
    shallow(<DeleteModal slug={slug} confirmDelete={confirmDelete}
                         deleteArticle={deleteArticle}/>)
  });

  it('should call deleteArticle when handleClick is called', () => {
    wrapper.instance().handleClick((getEvent()));
    expect(deleteArticle).toBeCalled();
  });

  it('should set sate redirect value to true on successfully deleting an article', () => {
    wrapper.setProps({ confirmDelete: true });
    expect(wrapper.state().redirect).toBe(true);
  });
});
