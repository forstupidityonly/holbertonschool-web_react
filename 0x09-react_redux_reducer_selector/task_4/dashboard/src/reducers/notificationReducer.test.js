import { notificationReducer, initalState } from './notificationReducer.js'
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes.js'
import { notificationNormalizer } from '../schema/notifications.js'
import { Map, setIn } from 'immutable';
import '../../config/setupTests'

describe('Test notificationReducer', () => {

  it('test FETCH_NOTIFICATIONS_SUCCESS', () => {
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
    const expected = {
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
    }
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
    const fakeState = new Map([])
    const expectedReal = fakeState.merge(notif)
    const recived = notificationReducer(undefined, action)
    expect(recived).toEqual(expectedReal)
  })

  it('Test  MARK_AS_READ', () => {
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
    const recived = notificationReducer(state, action)
    const expected = setIn(
      state, ['notifications','entities', 'notifications', action.index.toString(), 'isRead'],
      true
    )
    expect(recived).toEqual(expected)
  })

  it('Test SET_TYPE_FILTER', () => {
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
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    }
    const expected = Map({
      filter: "URGENT",
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
    const recived = notificationReducer(state, action)
    expect(recived).toEqual(expected)
  })

})
