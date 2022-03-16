import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js'

function selectCourse(index) {
  return dispatch({type: SELECT_COURSE,
          index
  });
}

function unSelectCourse(index) {
  return dispatch({type: UNSELECT_COURSE,
          index
  });
}

export { selectCourse, unSelectCourse }
