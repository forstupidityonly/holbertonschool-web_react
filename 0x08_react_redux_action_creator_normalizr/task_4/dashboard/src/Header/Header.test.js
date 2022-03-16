import { shallow, mount } from 'enzyme';
import React from 'react';
import Header from './Header';
import '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Test Header', () => {

  it('renders without crashing', () => {
    const val = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={val}><Header /></AppContext.Provider>);
  });

  it('verify that Header renders img', () => {
    const val = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={val}><Header /></AppContext.Provider>);
    expect(wrapper.find('.Header img')).toHaveLength(1);
  });

  it('verify that Header renders h1', () => {
    const val = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={val}><Header /></AppContext.Provider>);
    expect(wrapper.find('.Header h1')).toHaveLength(1);
  });

  it('Verify that the logoutSection is not created', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('Verify that the logoutSection is created', () => {
    const val = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={val}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('Verify that clicking on the link is calling the spy', () => {
    const logOutSpy = jest.fn();
    const val = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: logOutSpy, }
    const wrapper = mount(<AppContext.Provider value={val}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection h1 a')).toHaveLength(1);
    wrapper.find('#logoutSection h1 a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

});
