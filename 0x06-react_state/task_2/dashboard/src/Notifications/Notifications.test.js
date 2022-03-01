import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import '../../config/setupTests';
import {getFullYear, getFooterCopy, getLatestNotification} from '../utils/utils.js';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

const htmlObj = {
  __html: getLatestNotification(),
}

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

describe('Test Notifications', () => {

  it('renders without crashing', () => {
    shallow(<notifications />);
  });

  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find('.Notifications NotificationItem')).toHaveLength(3);
  });

  it('verify that Notifications renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('verify that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('verify that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('verify that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('verify  that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    const wrapperTwo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperTwo.find('.Notifications')).toHaveLength(1);
  });

  it(' verify when passed list of notifications, renders correctly with right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).not.toEqual('Here is the list of notifications');
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('verify markAsRead produces correct message', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}  />);
    console.log = jest.fn();
    const id = 42;
    const instance = wrapper.instance();
    instance.markAsRead(id);
    expect(console.log).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
    jest.restoreAllMocks();
  });

  it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow (
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find("#menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  it('verify that clicking on the button calls handleHideDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow (
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find("button").simulate("click");
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

});
