import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ArticleForm from '../articleForm';

describe('ArticleForm component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const props = {
    handleSubmit: jest.fn(),
    resetForm: jest.fn(),
    handleChange: jest.fn(),
    handleEditorChange: jest.fn(),
    title: '',
    description: '',
    body: '',
    loading: false,
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<ArticleForm
        {...props}
    />);
  });

  it('should render correctly', () => {
    shallow(<ArticleForm {...props}/>)
  });

  it('should call resetForm on clear', () => {
    wrapper.find('#clear-button').simulate('click', { preventDefault() {} });
    expect(props.resetForm).toBeCalled();
  });

  it('should call handleSubmit on submission', () => {
    wrapper.find('#add-article-form').simulate('submit');
    expect(props.handleSubmit).toBeCalled();
  });

  it('should call handleChange on editing', () => {
    wrapper.find('#title').simulate('change');
    expect(props.handleChange).toBeCalled();
  });

  it('should call handleEditorChange on editing', () => {
    wrapper.find('#text-editor').simulate('change');
    expect(props.handleEditorChange).toBeCalled();
  });
});
