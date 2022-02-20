import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
import closeIcon from '../assets/close-icon.png';
import {getLatestNotification} from '../utils/utils.js';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <React.Fragment>
      <div className="menuItem">Your notifications</div>
      { displayDrawer && (
        <div className="Notifications">
          {listNotifications.length > 0 ? (
            <React.Fragment>
              <p style={{ display: "inline" }}>
                Here is the list of notifications
              </p>
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
                <ul>
                  {listNotifications.map((Notification) => (
                    <NotificationItem key={Notification.id} type={Notification.type} value={Notification.value} html={Notification.html} />
                  ))}
               </ul>
               </React.Fragment>
         ) : <p>No new notification for now</p>}
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
