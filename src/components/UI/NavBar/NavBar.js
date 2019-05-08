import React from "react";

import classes from "./NavBar.module.scss";

const NavBar = props => (
  <header className={classes.NavBar}>
    <h1>
      <p className={classes.Katakana}>シツモン</p>
      shitsumon
    </h1>
  </header>
);

export default NavBar;
