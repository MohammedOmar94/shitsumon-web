import React from "react";
import { withRouter } from 'react-router-dom'

import classes from "./NavBar.module.scss";

const NavBar = props => (
  <header className={classes.NavBar}>
    <h1 onClick={() => props.history.push('/')}>
      <p className={classes.Hiragana}>しつもん</p>
      shitsumon
    </h1>
  </header>
);

export default withRouter(NavBar);
