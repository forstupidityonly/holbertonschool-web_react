import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import '../../config/setupTests';

describe('Test Notifications', () => {

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications NotificationItem')).toHaveLength(3);
  });

  it('verify that Notifications renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
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

});
