import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

button.propTypes = {
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'back'])
}

button.defaultProps = {
  type: 'default'
}

function button({ className, children, onClick, selected, type }) {
  const defaultBtnClasses = classnames(
    'button',
    { 'button--active': selected },
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