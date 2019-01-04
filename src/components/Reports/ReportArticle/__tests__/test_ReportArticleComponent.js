import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { ReportArticleTest } from '../index';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  slug: '',
  handleClose: jest.fn(),
  handleShow: jest.fn(),
  postReport: jest.fn(),
  postReportFailure: false,
  postReportSuccess: false,

};

describe('it should render', () => {
  let wrapper;
  const mockStore = configureMockStore();

  beforeEach(() => {
    mockStore({
      ReportArticleTest: {
        postReportFailure: true,
        postReportSuccess: true,
      },
    });
    wrapper = shallow(<ReportArticleTest {...props} />);
  });

  it('should mount component', () => {
    shallow(<ReportArticleTest {...props} />);
  });
  it('should show modal', () => {
    wrapper.instance().handleShow();
    expect(wrapper.state().show).toEqual(true);
  });
  it('should hide modal', () => {
    wrapper.instance().handleClose();
    expect(wrapper.state().show).toEqual(false);
  });
  it('onClick submit', () => {
    const container = shallow(<ReportArticleTest {...props} />);
    const spy = jest.spyOn(container.instance(), 'onSubmit');
    container.find('.report-btn').simulate('click', { preventDefault() {} }, spy);
  });
});
