import { shallow, mount } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import '../../config/setupTests';
import AppContext from '../App/AppContext';
import { user, LogOut } from '../App/AppContext';

describe('Test Footer', () => {

  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('verify that Footer renders the text: Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });

  it('verify that the link is not displayed when isLoggedIn is false', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, LogOut }}><Footer /></AppContext.Provider>
    );
    expect(wrapper.find('div.footer span')).toHaveLength(0);
  });

  it('verify that the link is displayed when the user is logged in within the context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true }, LogOut }}><Footer /></AppContext.Provider>
    );
    expect(wrapper.find('div.footer span')).toHaveLength(0);
  });

});
