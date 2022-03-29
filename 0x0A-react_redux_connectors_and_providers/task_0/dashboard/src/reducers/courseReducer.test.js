import { courseReducer } from './courseReducer.js'
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes.js'
import { Map, fromJS, toJS, setIn } from 'immutable';
import coursesNormalizer from '../schema/courses.js'
import '../../config/setupTests'

const fake_state_one = Map([
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
])

const fake_state_two = Map([
  {
    id: 1,
    name: "ES6",
    isSelected: true,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: true,
    credit: 40
  }
])

describe('Test courseReducer', () => {

  it('default state returns an empty array', () => {
    const recived = courseReducer(undefined, "")
    expect(recived).toEqual(Map([]))
  })

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const fakeMap = Map([])
    const fetch_course_sucess_action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ],
    }
    const fetch_course_sucess_expected = coursesNormalizer([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ])
    const fakeMapMerged = fakeMap.merge(fetch_course_sucess_expected)
    const recived = courseReducer(undefined, fetch_course_sucess_action)
    expect(recived).toEqual(fakeMapMerged)
  })

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const select_course_action = {
      type: SELECT_COURSE,
      index: 2
    }
    const recived = courseReducer(fake_state_one, select_course_action)
    const expected = setIn(
      fake_state_one, ['entities', 'courses', select_course_action.index.toString(), 'isSelected'],
      true
    )
    expect(recived).toEqual(expected)
  })

  it('Test UNSELECT_COURSE returns the data with the right item updated', () => {
    const unselect_course_action = {
      type: UNSELECT_COURSE,
      index: 2
    }
    const recived = courseReducer(fake_state_two, unselect_course_action)
    const expected = setIn(
      fake_state_two, ['entities', 'courses', unselect_course_action.index.toString(), 'isSelected'],
      false
    )
    expect(recived).toEqual(expected)
  })

})
