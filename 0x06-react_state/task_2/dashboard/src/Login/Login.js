import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false,
        email: "",
        password: "",
        enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  };

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({isLoggedIn: true});
  };

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    if (event.target.value.length !== 0 && this.state.password.length !== 0)
      this.setState({enableSubmit: true});
    else
      this.setState({enableSubmit: false});
  };

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length !== 0 && this.state.email.length !== 0)
      this.setState({enableSubmit: true});
    else
      this.setState({enableSubmit: false});
  };

  render () {
    return (
      <React.Fragment>
        <div className={css(styles.Login)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <div className="form">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} className="inputForm"></input>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChangePassword} className="inputForm"></input>
              <input type="submit" id="submit" value="OK" disabled={!this.state.enableSubmit}/>
            </div>
          </form>
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
