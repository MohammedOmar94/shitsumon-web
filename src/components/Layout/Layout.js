import React, { Fragment } from 'react';
import classes from './Layout.module.scss';

import NavBar from '../UI/NavBar/NavBar';

const layout = (props) => (
  <Fragment>
    <NavBar />
    <main className={classes.Layout}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;