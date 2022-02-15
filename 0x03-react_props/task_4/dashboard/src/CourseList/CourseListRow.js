import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  return (
    <React.Fragment>
      <tr>
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

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "default",
  textSecondCell: null,
};

export default CourseListRow;
