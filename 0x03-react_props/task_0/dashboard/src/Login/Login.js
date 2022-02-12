import './Login.css';
import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function Login() {
  return (
    <div className="Login">
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
  );
}

export default Login;
