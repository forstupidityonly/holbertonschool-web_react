import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  };

  render () {
    return (
      <React.Fragment>
        <div className={css(styles.Login)}>
          <p>Login to access the full dashboard</p>
          <div className="form">
            <React.Fragment>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="inputForm"></input>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" className="inputForm"></input>
              <button type="button">OK</button>
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Login: {
    color: '#000000',
    fontWeight: 'bold',
    minHeight: '60vmin',
    padding: 32,
    marginLeft: 20,
  },
});

Login.propTypes = {
};

Login.defaultProps = {
};

export default Login;
