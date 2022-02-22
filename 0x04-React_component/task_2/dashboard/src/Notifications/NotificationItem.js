import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {

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
