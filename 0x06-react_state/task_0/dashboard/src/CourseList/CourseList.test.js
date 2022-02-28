import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';
import '../../config/setupTests';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('test CourseList', () => {

  it('renders CourseList without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

});
