import React from "react";
import PropTypes from "prop-types";

import classes from "./Dropdown.module.scss";

const dropdown = props => (
  <div className={classes.DropdownContainer}>
    <p className={classes.DropdownLabel}>{props.label}</p>
    <select className={classes.Dropdown} onChange={(evt) => props.onChange(evt)}>
      {props.options.map(option => (
        option && <option value={option.value}>{option.name}</option>
      ))}
    </select>
  </div>
);

export default dropdown;
