import "./styles.scss";

import _includes from "lodash/includes"
import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom';
import classnames from "classnames";

import Header from "../UI/Header/Header";

const layout = ({ children, onSideMenuClick, location }) => {
  document.createElement('main');

  const hasTealBackgroundColor = _includes(location.pathname, "topics")

  const componentClass = classnames(
    "layout",
    { "layout--tealBackground": hasTealBackgroundColor }
  )

  return (
    <Fragment>
      <Header onBurgerClick={onSideMenuClick} />
      <main className={componentClass}>{children}</main>
    </Fragment>
  );
};

export default withRouter(layout);
