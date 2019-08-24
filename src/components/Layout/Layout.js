import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom';

import classes from "./Layout.module.scss";
import NavLinks from "../UI/NavLinks/NavLinks";
import Header from "../UI/Header/Header";

const layout = props => {
  document.createElement('main');
  let navLinks = null;
  if (props.location.pathname !== '/quiz') {
    navLinks = <NavLinks />;
  }
  return (
    <Fragment>
      <Header onBurgerClick={props.drawerClickHandler} />
      <main className={classes.Layout}>{props.children}</main>
      <footer>
        { navLinks }
      </footer>
    </Fragment>
  );
};

export default withRouter(layout);
