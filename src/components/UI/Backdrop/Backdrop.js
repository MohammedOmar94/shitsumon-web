import'./styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

backdrop.propTypes = {
  hide: PropTypes.bool,
  onClick: PropTypes.func
}

backdrop.defaultProps = {
  hide: true
}

function backdrop({ onClick, hide }) {
  const backdropClasses = classnames(
    'backdrop',
    { 'backdrop--hidden': hide }
  )

  return <div className={backdropClasses} onClick={onClick}/>
}

export default backdrop;