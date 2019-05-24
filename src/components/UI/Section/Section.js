import React from "react";
import PropTypes from 'prop-types';

import classes from "./Section.module.scss";

const section = props => (
  <section className={`${classes.Section} ${props.className}`}>
    <h2 className={classes.SectionHeader}>{props.name}</h2>
    {props.children}
  </section>
);

section.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default section;
