import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes.js'
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from './uiActionCreators.js'
import '../../config/setupTests'
import fetchMock from 'node-fetch'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('node-fetch', () => require('fetch-mock').sandbox())
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

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

  it('verify that if the API returns the right response', () => {
    const store = mockStore({})
    fetchMock.get("/login-sucess.json", 200)
    return store.dispatch(loginRequest('johnDoe@email.com', 'johns_password')).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login('johnDoe@email.com', 'johns_password'))
      expect(actions[1]).toEqual(loginSuccess())
    })
  });

  it('verify that if the API query fails', () => {
    const store = mockStore({})
    fetchMock.get("/login-sucess.json", () => {
      throw new Error(ERROR_MESSAGE)
    }, { overwriteRoutes: true })
    return store.dispatch(loginRequest('johnDoe@email.com', 'johns_password')).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login('johnDoe@email.com', 'johns_password'))
      expect(actions[1]).toEqual(loginFailure())
    })
  });

});
