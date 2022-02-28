import { shallow, mount, unmount } from 'enzyme';
import React from 'react';
import '../../config/setupTests';
import Login from '../Login/Login.js';
import WithLogging from './WithLogging.js';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe("test HOC WithLogging", () => {
  it("test console.log is called with Component default", () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />)
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(wrapper.exists()).toEqual(false);
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('test console.log is called with Component Login', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(wrapper.exists()).toEqual(false);
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
