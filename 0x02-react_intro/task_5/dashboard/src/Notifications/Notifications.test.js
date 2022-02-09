import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

describe('Test Notifications', () => {

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('verify that Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications li')).toHaveLength(3);
  });

  it('verify that Notifications renders the text: Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });

});
