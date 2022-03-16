import { markAsAread, setNotificationFilter } from './notificationActionCreators.js'
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes.js'

describe('Test Action Creators', () => {

  it('markAsRead', () => {
    const expected = {
      type: MARK_AS_READ,
      index: 1
    }
    const recived = markAsAread(1)
    expect(recived).toEqual(expected)
  });

  it('setNotificationFilter', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    }
    const recived = setNotificationFilter(NotificationTypeFilters.DEFAULT)
    expect(recived).toEqual(expected)
  });

});
