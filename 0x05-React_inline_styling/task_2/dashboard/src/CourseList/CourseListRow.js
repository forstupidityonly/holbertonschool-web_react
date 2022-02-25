import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
}

const headerStyle = {
   backgroundColor: '#deb5b545',
}

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return (
    <React.Fragment>
      <tr style={isHeader ? headerStyle : rowStyle}>
        {isHeader && textSecondCell === null && (
          <th colSpan={2}>{textFirstCell}</th>
        )}
        {isHeader && textSecondCell !== null && (
          <React.Fragment>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </React.Fragment>
        )}
        {isHeader === false && (
          <React.Fragment>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </React.Fragment>
        )}
      </tr>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  emptyForChecker: {},
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "default",
  textSecondCell: null,
};

export default CourseListRow;
