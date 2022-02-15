import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import closeIcon from '../assets/close-icon.png';
import {getLatestNotification} from '../utils/utils.js';
import PropTypes from 'prop-types';

function notifications({ displayDrawer }) {
  return (
    <React.Fragment>
      <div className="menuItem">Your notifications</div>
      { displayDrawer && (
        <div className="Notifications">
          <button
          onClick={() => {
            console.log('Close button has been clicked');
          }}
          style={{
            float: 'right',
            height: '35px',
            width: '35px',
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
          }}
          aria-label="Close"
          ><img
            src={closeIcon}
            style={{
              height: '30px',
              width: '30px',
            }} alt="Close"/></button>
          <p>Here is the list of notifications</p>
          <ul>
            < NotificationItem type='default' value='New course available' />
            < NotificationItem type='urgent' value='New resume available' />
            < NotificationItem html={{__html: getLatestNotification()}} />
          </ul>
        </div>
      )}
    </React.Fragment>
  );
}

notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

notifications.defaultProps = {
  displayDrawer: false,
};

export default notifications;
