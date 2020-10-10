import React from 'react';

import classes from './SideDrawer.module.scss';
import Item from './Item/Item';
import LanguageSelector from "../LanguageSelector"

const sideDrawer = (props) => {
  const { languageStudied, history, onChange } = props
  let topicsPathname = `/${languageStudied}/topics`

  const handleChange = (newLanguage) => {
    topicsPathname = `/${newLanguage}/topics`
    onChange(newLanguage);
    history.push(topicsPathname)
    props.clicked()
  }

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
      <LanguageSelector
        languageStudied={languageStudied}
        onChange={handleChange}
      />
    </nav>
  )
}
export default sideDrawer;