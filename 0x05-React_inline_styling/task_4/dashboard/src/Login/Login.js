import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.Login)}>
      <p className={css(styles.loginP)}>Login to access the full dashboard</p>
      <div className={css(styles.loginForm)}>
        <React.Fragment>
          <label htmlFor="email" className={css(styles.lable)}>Email:</label>
          <input type="email" id="email" name="email" className="inputForm"></input>
          <label htmlFor="password" className={css(styles.lable)}>Password:</label>
          <input type="password" id="password" name="password" className="inputForm"></input>
          <button type="button">OK</button>
        </React.Fragment>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  Login: {
    color: '#000000',
    fontWeight: 'bold',
    minHeight: '60vmin',
    margin: '40px auto 150px auto',
    '@media (max-width: 900px)': {
      minHeight: 0,
      margin: 0,
    }
  },

  loginP: {
    margin: '3rem 0rem 0rem 2rem',
    '@media (max-width: 900px)':{
      marginTop: 0,
    }
  },

  loginForm: {
    margin: '1rem 0rem 2rem 2rem',
  },

  lable: {
    '@media (max-width: 900px)': {
      display: 'block',
    }
  }

});

export default Login;
