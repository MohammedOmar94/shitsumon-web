import React from 'react';

import classes from './SideDrawer.module.scss';
import Item from './Item/Item';
import LanguageSelector from "../LanguageSelector"

import { getLanguageStudied } from "../../../utils";

export default function SideDrawer(props) {
  const topicsPathname = `/${getLanguageStudied()}/topics`

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
          <Item href={topicsPathname} label="Quizzes" />
        </li>
        <li onClick={props.clicked}>
         <Item label='Profile' />
        </li>
      </ul>
      <LanguageSelector onChange={() => props.clicked()} />
    </nav>
  )
}
