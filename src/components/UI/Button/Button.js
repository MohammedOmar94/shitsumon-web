import classes from './Button.module.scss';

import React from 'react';
import PropTypes from 'prop-types';

button.propTypes = {
  type: PropTypes.oneOf(['default', 'back']),
  selected: PropTypes.bool
}

button.defaultProps = {
  type: 'default'
}

function button({ className, children, onClick, type, selected }) {
  if (type === 'default') {
    return <button className={selected ? classes.ActiveBtn : classes.Button } onClick={onClick}>{children}</button>
  } else if (type === 'back') {
    return <i onClick={onClick} className={`fas fa-arrow-circle-left ${classes.Button__close} ${className}`}></i>
  }
}

export default button;