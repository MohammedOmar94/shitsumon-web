import React from 'react';

import classes from './SideDrawer.module.scss';
import Item from './Item/Item';

const sideDrawer = (props) => {
  let drawerOpenClass = props.show ? classes.DrawerOpen : null;
  return (
    <nav className={`${classes.SideDrawer} ${drawerOpenClass}`}>
      <ul>
        <li onClick={props.clicked}>
          <Item label='Partner Up' />
        </li>
        <li onClick={props.clicked}>
          <Item label="Games" />
        </li>
        <li onClick={props.clicked}>
          <Item href='/topics' label="Quizzes" />
        </li>
        <li onClick={props.clicked}>
         <Item label='Profile' />
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer;