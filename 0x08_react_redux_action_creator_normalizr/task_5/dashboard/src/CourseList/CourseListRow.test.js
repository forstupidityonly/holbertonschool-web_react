import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow.js';
import '../../config/setupTests';

describe('Test CourseListRow', () => {

  it('renders CourseListRow without crashing', () => {
    shallow(<CourseListRow />);
  });

  it('test when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').get(0).props.colSpan).toEqual(2);
  });

  it('test when isHeader is true and so is textSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell='textSecondCell' />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.html()).toContain('textSecondCell');
    expect(wrapper.html()).toBe('<tr style=\"background-color:#deb5b545\"><th>default</th><th>textSecondCell</th></tr>');
  });

  it('test when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textSecondCell='textSecondCell' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.html()).toContain('textSecondCell');
  });

});
