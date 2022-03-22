import { selectCourse, unSelectCourse } from './courseActionCreators.js'
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js'
import '../../config/setupTests'

describe('Test Action Creators', () => {

  it('selectCourse', () => {
    const expected = { type: SELECT_COURSE, index: 1 }
    const recived = selectCourse(1)
    expect(recived).toEqual(expected)
  });

  it('unSelectCourse', () => {
    const expected = { type: UNSELECT_COURSE, index: 1 }
    const recived = unSelectCourse(1)
    expect(recived).toEqual(expected)
  });

});
