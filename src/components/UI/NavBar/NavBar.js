import React from "react";
import { Link } from 'react-router-dom'

import classes from "./NavBar.module.scss";

const NavBar = props => (
  <header className={classes.NavBar}>
    <button className={classes.Hamburger} onClick={props.openDrawer}>
      <i className="fas fa-bars"></i>
    </button>
    <Link to={{pathname: '/'}} >
      <h1>
        <p className={classes.Hiragana}>しつもん</p>
        shitsumon
      </h1>
    </Link>
  </header>
);

export default NavBar;
