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
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('verify that Login renders three label items', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('verify submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input#submit').is('[disabled]')).toBe(true);
  });

  it('verify changing email & password enables button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input#email')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
    wrapper.find('input#email').simulate('change', {target: { value: 'some@email.com' }});
    wrapper.find('input#password').simulate('change', {target: { value: 'password' }});
    expect(wrapper.state().enableSubmit).toBe(true);
  });

});
