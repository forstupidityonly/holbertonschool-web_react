import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
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
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators.js'

const htmlObj = {
      __html: getLatestNotification(),
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.myListener = this.myListener.bind(this);
    //this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    //this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.state = {
      //displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => this.logOut(),
      listNotifications: [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: htmlObj},
    ],
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

  //handleDisplayDrawer() {
    //this.setState({displayDrawer: true});
  //};

  //handleHideDrawer() {
    //this.setState({displayDrawer: false});
  //};

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

  markNotificationAsRead(id) {
    const newNotifications = this.state.listNotifications.filter(notification =>
      notification.id !== id
    )
    this.setState({ listNotifications: newNotifications });
  }

  render () {

    const { displayDrawer } = this.props.displayDrawer;
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];

    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <React.Fragment>
          <Notifications 
            displayDrawer={this.props.displayDrawer}
            listNotifications={ this.state.listNotifications  }
            handleDisplayDrawer={ this.props.displayNotificationDrawer }
            handleHideDrawer={ this.props.hideNotificationDrawer }
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
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func, 
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.toJS().isUserLoggedIn,
  displayDrawer: state.toJS().isNotificationDrawerVisible,
});

const mapDispatchToProps = (dispatch) => ({
  displayNotificationDrawer,
  hideNotificationDrawer,
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export { mapStateToProps, mapDispatchToProps, ConnectedApp };
