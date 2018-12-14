import React from 'react';
import { shallow } from 'enzyme';
import { EditArticle } from '../editArticle';


describe('EditArticle Component', () => {
  let wrapper;
  const nextProps = {
    editArticleSuccess: true,
    confirmDelete: true,
    articlePayload: {
      article: {
        author: {username: 'Mathias'},
        body: '<p>Many articles</p>',
        title: 'Test for editing articles',
      },
    },

  };
  const props = {
    history: {push: jest.fn()},
    fetchSpecificArticle: jest.fn(),
    updateArticle: jest.fn(),
    resetForm: jest.fn(),
    handleChange: jest.fn(),
    handleEditorChange: jest.fn(),
    toggleEdit: jest.fn(),
    match: {params: {slug: 'test-article'}},
    articlePayload: {
      article:
          {author: {username: 'mathias'}, body: 'testing'},
    },
  };
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {name, value,},
  });

  beforeEach(() => {
    wrapper = shallow(<EditArticle {...props}/>,);
  });

  it('should render the EditArticle Component correctly', () => {
    shallow(<EditArticle {...props}/>)
  });

  it('should call toggleEdit function when the edit button is clicked', () => {
    wrapper.instance().toggleEdit();
    expect(wrapper.state().isEditing).toEqual(true);
  });

  it('should call updateArticle when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(props.updateArticle).toBeCalled();
  });

  it('should change the state of body for the article when handleEditorChange is called', () => {
    wrapper.instance().handleEditorChange('The Body of an article');
    expect(wrapper.state().body).toEqual('The Body of an article');
  });

  it('should call resetForm function when the clear button is clicked', () => {
    wrapper.instance().resetForm();
    expect(wrapper.state().title).toEqual('');
  });

  it('should change the state of title/description when handleChange event is called', () => {
    wrapper.instance().handleChange(getEvent('title', 'The title'));
    expect(wrapper.state().title).toEqual('The title');
  });

  it('should not redirect if article was not updated successfully', () => {
    wrapper.setProps({createArticleSuccess: false});
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect to dashboard if the article is updated successfully', () => {
    wrapper.setProps({...nextProps});
    expect(props.history.push).toBeCalledWith('/articles');
  });
});
