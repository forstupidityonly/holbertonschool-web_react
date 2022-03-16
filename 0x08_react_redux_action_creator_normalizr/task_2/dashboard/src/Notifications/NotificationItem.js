import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {

  render() {
    let {
      markAsRead,
      type,
      html,
      value,
      id,
    } = this.props
    return (
      <li onClick={() => markAsRead(value)}  data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    );
  }  
}

const styles = StyleSheet.create({
  emptyForChecker: {},
});

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
