import { LOGIN,
         LOGOUT,
         DISPLAY_NOTIFICATION_DRAWER, 
         HIDE_NOTIFICATION_DRAWER, 
         LOGIN_SUCCESS, 
         LOGIN_FAILURE 
       } from '../actions/uiActionTypes.js'
import { Map } from 'immutable';

const initalState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
})

export default function uiReducer(state = initalState, action) {
  switch (action) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set("isNotificationDrawerVisible", true)
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return state.set("isNotificationDrawerVisible", false)
    }
    case LOGIN_SUCCESS: {
      return initalState.set("isUserLoggedIn", true)
    }
    case LOGIN_FAILURE: {
      return initalState.set("isUserLoggedIn", false)
    }
    case LOGOUT: {
      return initalState.set("isUserLoggedIn", false)
    }
    default:
      return initalState
  }
}

export { initalState }
