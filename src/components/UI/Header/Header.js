import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Logo from '../Logo/index'

header.propTypes = {
 onBurgerClick: PropTypes.func
}

function header({ onBurgerClick }) {
  return (
    <header className='header'>
      <button className='header__hamburger-icon' onClick={onBurgerClick}>
        <i className='fas fa-bars'></i>
      </button>
      <Link to={{pathname: '/'}} >
        <Logo />
      </Link>
    </header>
  )
}

export default header;
