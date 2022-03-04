import logo from '../assets/logo.jpg';
import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let extract = this.context;
    return (
      <React.Fragment>
        <header className="Header">
          <div className={css(styles.Header)}>
            <img src={logo} className={css(styles.Logo)}  alt="logo" />
            <h1>School dashboard</h1>
          </div>
        </header>
        {extract.user.isLoggedIn && (
          <section id="logoutSection">
            <h1>Welcome {extract.user.email} <a onClick={extract.logOut}>(logout)</a></h1>
          </section>
        )}
      </React.Fragment>
    );
  }
}
Header.contextType = AppContext

const styles = StyleSheet.create({
  Logo: {
    height: "20vmin",
    pointerEvents: "none",
  },
  Header: {
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "#df344b",
    borderBottom: "4px solid #df344b",
  },
});

export default Header;
