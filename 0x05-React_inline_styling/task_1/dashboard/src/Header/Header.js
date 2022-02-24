import logo from '../assets/logo.jpg';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className="Header">
      <div className={css(styles.Header)}>
        <img src={logo} className={css(styles.Logo)}  alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

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
