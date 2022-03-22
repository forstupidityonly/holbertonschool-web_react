import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes.js'

function courseReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      return action.data.map((myMap) => ({
        id: myMap.id,
        name: myMap.name,
        isSelected: false,
        credit: myMap.credit,
      }))
    }
    case SELECT_COURSE: {
      return state.map((myMap) => ({
        ...myMap,
        isSelected: myMap.id === action.index ? true : false
      }))
    }
    case UNSELECT_COURSE: {
      return state.map((myMap) => ({
        ...myMap,
        isSelected: myMap.id === action.index ? false : true
      }))
    }
    default:
      return state
  }
}

export { courseReducer }
