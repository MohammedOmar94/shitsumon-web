import React from "react";
import { Link } from 'react-router-dom'

import classes from "./NavBar.module.scss";

const NavBar = props => (
  <header className={classes.NavBar}>
    <Link to={{pathname: '/'}}>
      <h1>
        <p className={classes.Hiragana}>しつもん</p>
        shitsumon
      </h1>
    </Link>
  </header>
);

export default NavBar;
