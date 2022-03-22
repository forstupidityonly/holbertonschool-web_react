import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes.js'

const initalState = {
  filter: "DEFAULT",
  notifications: [],
}

function notificationReducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const newState = state
      newState.notifications = action.data.map((myMap) => ({
        id: myMap.id,
        isRead: false,
        type: myMap.type,
        value: myMap.value,
      }))
      return newState
    }
    case MARK_AS_READ: {
      const newState = state
      newState.notifications = state.notifications.map((myMap) => ({
        ...myMap,
        isRead: myMap.id === action.index ? true : false
      }))
      return newState
    }
    case SET_TYPE_FILTER: {
      const newState = {
        ...state,
        filter: action.filter
      }
      return newState
    }
    default:
      return state
  }
}

export { initalState, notificationReducer }
