import React from 'react';

import classes from './Backdrop.module.scss';

const backdrop = (props) => {
  const backdropClass = props.show ? classes.Backdrop : classes.Hidden;
  return <div className={backdropClass} onClick={props.clicked}/>
}

export default backdrop;