import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js'
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators.js'
import '../../config/setupTests'

describe('Test Action Creators', () => {

  it('login', () => {
    const expected = {
        type: 'LOGIN',
        user: { email: 'johnDoe@email.com', password: 'johns_password' }
    }
    const recived = login( 'johnDoe@email.com', 'johns_password' )
    expect(recived).toEqual(expected)
  });

  it('logout', () => {
    const expected = { type: 'LOGOUT' }
    const recived = logout()
    expect(recived).toEqual(expected)
  });

  it('displayNotificationDrawer', () => {
    const expected = { type: 'DISPLAY_NOTIFICATION_DRAWER' }
    const recived = displayNotificationDrawer()
    expect(recived).toEqual(expected)
  });

  it('hideNotificationDrawer', () => {
    const expected = { type: 'HIDE_NOTIFICATION_DRAWER' }
    const recived = hideNotificationDrawer()
    expect(recived).toEqual(expected)
  });

});
