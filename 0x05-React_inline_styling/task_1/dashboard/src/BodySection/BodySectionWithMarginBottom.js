import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.body)}>
      <BodySection {...props}/>
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    marginBottom: 40,
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default BodySectionWithMarginBottom
