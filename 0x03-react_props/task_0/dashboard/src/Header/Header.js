import logo from '../assets/logo.jpg';
import './Header.css';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function Header() {
  return (
    <div className="Header">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

export default Header;
