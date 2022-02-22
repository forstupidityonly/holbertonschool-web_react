import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';
import '../../config/setupTests';

describe('Test Login', () => {

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('verify that Login renders three input items', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.Login input')).toHaveLength(2);
  });

  it('verify that Login renders three label items', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.Login label')).toHaveLength(2);
  });

});
