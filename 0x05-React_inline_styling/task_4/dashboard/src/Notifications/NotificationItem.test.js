import { shallow } from 'enzyme';
import React from 'react';
import NotificationsItem from './NotificationItem.js';
import '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('Test App', () => {

  it('renders NotificationsItem without crashing', () => {
    shallow(<NotificationsItem />);
  });

  it('renders the correct html for type and value', () => {
    const wrapper = shallow(<NotificationsItem type='default' value='test' />);
    expect(wrapper.props()['data-notification-type']).toBe('default');
    expect(wrapper.props()['children']).toBe('test');
  });

  it('renders the correct html for html', () => {
    const wrapper = shallow(<NotificationsItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('test');
  });

  it('verify markAsRead called on click has correct id', () => {
    const id = 42;
    const wrapper = shallow(<NotificationsItem type='default' value='test' key={id} markAsRead={(id) => { console.log(`Notification ${id} has been marked as read`)}} />)
    const listItem = wrapper.find('li').first();
    console.log = jest.fn();
    listItem.simulate('click');
    expect(console.log.mock.calls.length).toEqual(1);
    jest.restoreAllMocks();
  });
});
