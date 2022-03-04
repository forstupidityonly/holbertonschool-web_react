import { StyleSheet, css } from 'aphrodite';
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
import AppContext from './AppContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.myListener = this.myListener.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => this.logOut()
    };
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
      this.state.logOut();
    }
  };

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  };

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  };

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true }});
  };

  logOut() {
    this.setState({ user: {
                      email: '',
                      password: '',
                      isLoggedIn: false
                    } });
  }

  render () {

    const { displayDrawer } = this.state;
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
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <React.Fragment>
          <Notifications 
            displayDrawer={ displayDrawer }
            listNotifications={ listNotifications  }
            handleDisplayDrawer={ this.handleDisplayDrawer }
            handleHideDrawer={ this.handleHideDrawer }
          />
            <div className={css(styles.body)}>
              <Header />
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>some random text</p>
              </BodySection>
              <Footer className={css(styles.footer)}/>
            </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 32,
    marginLeft: 20,
    fontWeight: "bold",
    minHeight: "60vmin",
  },

  footer: {},
});

App.propTypes = {
};

App.defaultProps = {
};

export default App;
