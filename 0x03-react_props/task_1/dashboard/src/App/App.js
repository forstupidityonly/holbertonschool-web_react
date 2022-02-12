import './App.css';
import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function App() {
  return (
    <React.Fragment>
      <Notifications />
        <div className="App-body">
          <Header />
          <Login />
          <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;
