import './Footer.css';
import React, { useContext } from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import AppContext from '../App/AppContext';

function Footer() {
  const context = useContext(AppContext);
  return (
    <div className="Footer">
      <div className="App-footer">
        { context.user.isLoggedIn && (
          <p className='Link' href="#">Contact Us</p>
        )}
        <span> Copyright {getFullYear()} - {getFooterCopy(true)}</span>
      </div>
    </div>
  );
}

export default Footer;
