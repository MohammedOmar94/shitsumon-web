import React, { Fragment } from "react";

import classes from "./Layout.module.scss";
import Header from "../UI/Header/Header";

const layout = props => {
  document.createElement('main');

  return (
    <Fragment>
      <Header onBurgerClick={props.drawerClickHandler} />
      <main className={classes.Layout}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
