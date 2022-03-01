import React from 'react';
import NotificationItem from './NotificationItem.js';
import NotificationItemShape from './NotificationItemShape.js';
import closeIcon from '../assets/close-icon.png';
import {getLatestNotification} from '../utils/utils.js';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    // Rendering the component only if
    // passed props value is changed

    if (nextProps.listNotifications.length > this.props.listNotifications.length || 
        nextProps.displayDrawer != this.props.displayDrawer) {
      return true;
    } else {
      return false;
    }
  };

  render () {

    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <React.Fragment>
        <div className="menuItem" id="menuItem" style={menuItem} onClick={handleDisplayDrawer}>Your notifications</div>
        { this.props.displayDrawer && (
          <div className="Notifications" style={NotificationsStyle}>
            { this.props.listNotifications.length > 0 ? (
              <React.Fragment>
                <p style={{ display: "inline" }}>
                  Here is the list of notifications
                </p>
                <button
                  className="closeButton"
                  id="closeButton"
                  onClick={handleHideDrawer}
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
                    {this.props.listNotifications.map((Notification) => (
                      <NotificationItem 
                      markAsRead={this.markAsRead}
                      key={Notification.id}
                      id={Notification.id}
                      type={Notification.type}
                      value={Notification.value} 
                      html={Notification.html} />
                    ))}
                 </ul>
                 </React.Fragment>
           ) : <p>No new notification for now</p>}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  EmptyForChecker: {},
});

const NotificationsStyle = {
    border: '2px dashed #df344b',
    padding: 4,
    width: '35%',
    float: 'right',
}
const menuItem = {
    display: 'flex',
    justifyContent: 'flex-end',
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
