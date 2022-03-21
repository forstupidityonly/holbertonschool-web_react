import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js'

function selectCourse(index) {
  return {type: SELECT_COURSE,
          index
  }
}

function unSelectCourse(index) {
  return {type: UNSELECT_COURSE,
          index
  }
}

export { selectCourse, unSelectCourse }
