import { uiReducer, initalState } from './uiReducer.js'
import { LOGIN,
         LOGOUT,
         DISPLAY_NOTIFICATION_DRAWER, 
         HIDE_NOTIFICATION_DRAWER, 
         LOGIN_SUCCESS, 
         LOGIN_FAILURE 
       } from '../actions/uiActionTypes.js'
import { SELECT_COURSE } from '../actions/courseActionTypes.js'
import '../../config/setupTests'

describe('Test uiReducer', () => {

  it('when no action is passed', () => {
    const recived = uiReducer(initalState)
    expect(recived).toEqual(initalState)
  })

  it('when the action SELECT_COURSE is passed', () => {
    const recived = uiReducer(initalState, SELECT_COURSE)
    expect(recived).toEqual(initalState)
  })

  it('when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const recived = uiReducer(initalState, DISPLAY_NOTIFICATION_DRAWER)
    expect(recived.toJS()).toEqual({ isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} })
  })

})
