import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes.js'
import coursesNormalizer from '../schema/courses.js'
import { Map, setIn } from 'immutable';

const initialState = []

export const courseReducer = (state = new Map(initialState), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const myData = action.data.map((myMap) => ({
        id: myMap.id,
        name: myMap.name,
        isSelected: false,
        credit: myMap.credit,
      }))
      const normalizedData = coursesNormalizer(myData)
      return state.merge(normalizedData)
    }
    case SELECT_COURSE: {
      return setIn(
        state, ['entities', 'courses', action.index.toString(), 'isSelected'],
        true
      )
    }
    case UNSELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        false
      )
    }
    default:
      return state
  }
}

