import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
        <div className="App-body">
          <Header />
          {isLoggedIn ? < CourseList /> : < Login  />}
          <Footer />
        </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
