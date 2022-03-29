import { Map } from 'immutable'

function filterTypeSelected(state) {
  return state.toJS().filter
}

function getNotifications(state) {
  return state.toJS().notifications
}

function getUnreadNotifications(state) {
  const notifications = state.toJS().notifications
  let myVals = {
    notifications: []
  }
  Object.values(notifications).forEach((key)=>{
    if (key.isRead === false) {
      myVals.notifications.push(key)
    }
  })
  return Map(myVals)
}

export { filterTypeSelected, getNotifications, getUnreadNotifications }
