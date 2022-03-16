import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
}

const headerStyle = {
   backgroundColor: '#deb5b545',
}

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const [isChecked, setIsChecked] = useState(false);
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
            <td className={isChecked ? css(styles.rowChecked) : "rowNotChecked"}>
              <input type="checkbox" name="styleCheckbox" onChange={() => {setIsChecked(!isChecked)}}/>
              {textFirstCell}</td>
            <td>{textSecondCell}</td>
          </React.Fragment>
        )}
      </tr>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  emptyForChecker: {},

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },

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
