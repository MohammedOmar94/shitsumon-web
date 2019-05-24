import React, { Fragment } from 'react';
import classes from './Layout.module.scss';

import NavLinks from '../UI/NavLinks/NavLinks';
import NavBar from '../UI/NavBar/NavBar';

const layout = (props) => (
  <Fragment>
    <NavBar />
    <main className={classes.Layout}>
      {props.children}
    </main>
    <footer>
      <NavLinks />
    </footer>
  </Fragment>
);

export default layout;