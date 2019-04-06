import React, { Fragment } from 'react';

const layout = (props) => (
  <Fragment>
    <main>
      {props.children}
    </main>
  </Fragment>
);

export default layout;