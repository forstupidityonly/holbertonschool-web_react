import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes.js'
import { Map, setIn } from 'immutable';
import { notificationNormalizer } from '../schema/notifications.js'

const initalState = {
  filter: "DEFAULT",
  notifications: [],
}

function notificationReducer(state = new Map(initalState), action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const myData = action.data.map((myMap) => ({
        id: myMap.id,
        isRead: false,
        type: myMap.type,
        value: myMap.value,
      }))
      const notif = {
        filter: NotificationTypeFilters.DEFAULT,
        notifications: notificationNormalizer(myData),
      }
      return state.merge(notif)
    }
    case MARK_AS_READ: {
      return setIn(
        state, ['notifications', action.index - 1, 'isRead'],
        true
      )
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter)
    }
    default:
      return state
  }
}

export { initalState, notificationReducer }
