import React from "react";
import PropTypes from 'prop-types';

import classes from "./Section.module.scss";

const section = props => (
  <section className={classes.Section}>
    <h2 className={classes.SectionHeader}>{props.name}</h2>
    {props.children}
  </section>
);

section.propTypes = {
  name: PropTypes.string.isRequired
};

export default section;
