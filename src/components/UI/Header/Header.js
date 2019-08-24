import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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
        <h1 className='header__text'>
          <p className='header__hirgana-text' >しつもん</p>
          shitsumon
        </h1>
      </Link>
    </header>
  )
}

export default header;
