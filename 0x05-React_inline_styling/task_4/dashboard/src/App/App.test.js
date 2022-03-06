import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import { StyleSheetTestUtils } from 'aphrodite';
import '../../config/setupTests';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Test App', () => {

  it('renders App without crashing', () => {
    shallow(<App />);
  });

  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders Header  without crashing', () => {
    shallow(<Header />);
  });

  it('renders Login without crashing', () => {
    shallow(<Login />);
  });

  it('renders Footer  without crashing', () => {
    shallow(<Footer />);
  });

  it('check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('check that CourseList is displayed', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('ctr + h calls logout', () => {
    const events = {};
    const logout = jest.fn();
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    events.keydown({key: "h", ctrlKey: true});
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

});
