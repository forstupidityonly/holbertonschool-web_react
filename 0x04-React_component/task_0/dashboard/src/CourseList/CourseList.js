import React from 'react';
import './CourseList.css';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

function CourseList ({ listCourses  }) {
  return (
    <React.Fragment>
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={ true } />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={ true } />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" />
          ) : (
            listCourses.map((course) => (
              <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
            ))
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
