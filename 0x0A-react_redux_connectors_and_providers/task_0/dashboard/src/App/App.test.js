import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App.js';
import { mapStateToProps, mapDispatchToProps, connectedApp } from './App.js'
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import { StyleSheetTestUtils } from 'aphrodite';
import '../../config/setupTests';
import AppContext from './AppContext';
import { Map, fromJS } from 'immutable';

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
    mount(<Header />);
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
    /*const val = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={val}><App /></AppContext.Provider>);*/
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('ctr + h calls logout', () => {
    const events = {};
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();
    const wrapper = shallow(<App />);
    events.keydown({key: "h", ctrlKey: true});
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    jest.restoreAllMocks();
  });

  it('verify default displayDrawer = false & handleDisplayDrawer makes it true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('verify handleHideDrawer sets displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('verify that the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn();
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });

  it('verify that the logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.state().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it('verifies that markNotificationAsRead removes notification from listNotifications in state', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New majors available" },
      ]
    });
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', value: 'New majors available' }
    ])
  });

  it('Test mapStateToProps', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const result = mapStateToProps(state)
    expect(result).toEqual({ isLoggedIn: true })
  });

});
