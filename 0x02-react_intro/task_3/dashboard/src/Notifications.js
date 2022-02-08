import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import {getLatestNotification} from './utils.js';

function notifications() {
  return (
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}

export default notifications;
