import React from "react";

import classes from "./NavBar.module.scss";

const NavBar = props => (
  <header className={classes.NavBar}>
    <h1>
      <text className={classes.Katakana}>シツモン</text>
      shitsumon
    </h1>
  </header>
);

export default NavBar;
