import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector.js'
import { notificationReducer, initalState } from '../reducers/notificationReducer.js'
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes.js'
import { Map, setIn } from 'immutable'
import '../../config/setupTests'

describe('Test notificationSelector', () => {

  it('Test filterTypeSelected', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    }
    const reducerRecived = notificationReducer(undefined, action)
    const selecterRecived = filterTypeSelected(reducerRecived)
    expect(selecterRecived).toEqual('DEFAULT')
  })

  it('Test getNotifications', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    }
    const reducerRecived = notificationReducer(undefined, action)
    const expectedNotifications = reducerRecived.toJS().notifications
    const selecterRecived = getNotifications(reducerRecived)
    expect(selecterRecived).toEqual(expectedNotifications)
  })

  it('Test getUnreadNotifications', () => {
     const state = Map({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    })
    const action = {
      type: MARK_AS_READ,
      index: 2
    }
    const expected = {
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available'
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available'
          }
        ]
      }
    const reducerRecived = notificationReducer(state, action)
    const stateRecived = getUnreadNotifications(reducerRecived)
    expect(stateRecived.toJS()).toEqual(expected)
  })
})
