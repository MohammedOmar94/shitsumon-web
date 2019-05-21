import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const button = props => (
  <button className={props.selected ? classes.ActiveBtn : classes.Button } onClick={props.onClick}>{props.children}</button>
)

button.propTypes = {
  selected: PropTypes.bool
}

export default button;