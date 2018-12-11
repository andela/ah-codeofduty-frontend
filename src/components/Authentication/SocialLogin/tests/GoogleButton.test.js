import React from 'react';
import { shallow } from 'enzyme';
import { GoogleTest } from "../GoogleButton";

it('renders without crashing', () => {
    shallow (<GoogleTest />);
});
