import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

IconWithText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconClassName: PropTypes.string,
}

function IconWithText({ className, children, icon, iconClassName }) {
  const iconClasses = classnames(
    'iconWithText__icon',
    icon,
    iconClassName
  )

  return (
      <span className={className}>
        <i className={iconClasses} />
        {children}
      </span>
  )
}

export default IconWithText;