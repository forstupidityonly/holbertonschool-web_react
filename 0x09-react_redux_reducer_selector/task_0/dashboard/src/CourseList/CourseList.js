import React from 'react';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseList ({ listCourses  }) {
  return (
    <React.Fragment>
      <table className={css(styles.CourseList)}>
        <thead className={css(styles.tableHead)}>
          <CourseListRow textFirstCell="Available courses" isHeader={ true } />
          <CourseListRow className={css(styles.tableRow)} textFirstCell="Course name" textSecondCell="Credit" isHeader={ true } />
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

const styles = StyleSheet.create({
  CourseList: {
    width: "90%",
    margin: '40px auto 250px auto',
    minHeight: 150,
    border: '1px solid grey',
  },
  tableHead: {
    borderBottom: '1px solid grey',
  },
  tableRow: {
    textAlign: "left",
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
