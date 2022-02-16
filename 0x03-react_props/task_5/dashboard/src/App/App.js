import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import {getFullYear, getFooterCopy, getLatestNotification} from '../utils/utils.js';

function App({ isLoggedIn }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];

  const htmlObj = {
    __html: getLatestNotification(),
  };

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: htmlObj},
  ];

  return (
    <React.Fragment>
      <Notifications />
        <div className="App-body">
          <Header />
          {isLoggedIn ? < CourseList listCourses={listCourses} /> : < Login  />}
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
