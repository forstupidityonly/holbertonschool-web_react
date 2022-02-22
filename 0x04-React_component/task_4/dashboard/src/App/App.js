import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import {getFullYear, getFooterCopy, getLatestNotification} from '../utils/utils.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.myListener = this.myListener.bind(this);
  }
    
  componentDidMount() {
    document.addEventListener('keydown', this.myListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.myListener);
  }

  myListener(event) {
    let keysPressed = {};
    keysPressed[event.key] = true;
    if (event.ctrlKey && keysPressed['h']) {
      alert('Logging you out');
      this.props.logOut();
    }
  };


  render () {

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
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>some random text</p>
            </BodySection>
            <Footer />
          </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
