import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

button.propTypes = {
  rouned: PropTypes.bool,
  selected: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['default', 'back']),
}

button.defaultProps = {
  rouned: false,
  theme: 'dark',
  type: 'default'
}

function button({ className, children, onClick, rounded, selected, theme, type }) {
  const defaultBtnClasses = classnames(
    'button',
    { 'button--active': selected },
    { 'button--rounded': rounded },
    { 'button--lightTheme': theme === 'light' },
    { 'button--darkTheme': theme === 'dark' },
    className
  )

  const backBtnClasses = classnames(
    'fas fa-arrow-circle-left',
    'button__close',
    className
  )

  if (type === 'default') {
    return <button className={defaultBtnClasses} onClick={onClick}>{children}</button>
  } else if (type === 'back') {
    return <i onClick={onClick} className={backBtnClasses}></i>
  }
}

export default button;