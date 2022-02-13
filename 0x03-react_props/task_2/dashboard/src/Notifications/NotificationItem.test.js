import { shallow } from 'enzyme';
import React from 'react';
import NotificationsItem from './NotificationItem.js';
import '../../config/setupTests';

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
    expect(wrapper.html()).toBe('<li><u>test</u></li>');
  });

});
