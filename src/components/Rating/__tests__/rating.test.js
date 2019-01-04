import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Navbar } from '../../Navbar/Navbar';
import Average from '../averageRating';
import StarRatings, { Rating } from '../Rating';

const mockStore = configureMockStore();
const store = mockStore({});
const props = {
  current_rating: {
    current_rating: 2,
  },
};

const aveProps = {
  average_rating: {
    average_rating: 2.5,
  },
};

configure({ adapter: new Adapter() });

describe('Average Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Average {...aveProps} />
      </Provider>,
    );
    expect(wrapper.props().average_rating.average_rating).toBe(2.5);
  });

  it('should render Average without throwing an error', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Average />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Navbar should render correctly', () => {
    shallow(<Navbar />);
  });

  it('renders Register component without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Rating {...props} />
      </Provider>,
    );

    expect(wrapper.props().current_rating.current_rating).toBe(2);
  });

  it('renders Register component without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <StarRatings />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
