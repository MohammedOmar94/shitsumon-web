import React, { Fragment } from 'react';

import NavBar from '../UI/NavBar/NavBar';

const layout = (props) => (
  <Fragment>
    <NavBar />
    <main>
      {props.children}
    </main>
  </Fragment>
);

export default layout;