import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';
import '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Test Login', () => {

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('verify that Login renders three input items', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('verify that Login renders three label items', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });

});
