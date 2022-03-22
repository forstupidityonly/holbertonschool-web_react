import { courseReducer } from './courseReducer.js'
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes.js'
import { Map } from 'immutable';
import '../../config/setupTests'

const fake_state = [
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
]

describe('Test courseReducer', () => {

  it('default state returns an empty array', () => {
    const recived = courseReducer(undefined, "")
    expect(recived).toEqual(Map([]))
  })

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
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
    const fetch_course_sucess_expected = [
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
    ]
    const recived = courseReducer([], fetch_course_sucess_action)
    expect(recived).toEqual(fetch_course_sucess_expected)
  })

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const select_course_action = {
      type: SELECT_COURSE,
      index: 2
    }
    const select_course_expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
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
        isSelected: false,
        credit: 40
      }
    ]
    const recived = courseReducer(fake_state, select_course_action)
    expect(recived).toEqual(select_course_expected)
  })

})
