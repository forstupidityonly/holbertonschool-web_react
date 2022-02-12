import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import '../../config/setupTests';

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

});
