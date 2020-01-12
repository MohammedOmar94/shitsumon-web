import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ConnectionStatus from "../ConnectionStatus";
import Logo from "../Logo";

header.propTypes = {
  onBurgerClick: PropTypes.func
};

function header({ onBurgerClick }) {
  return (
    <header className="header">
      <div className="header__navigation">
        <button className="header__hamburger-icon" onClick={onBurgerClick}>
          <i className="fas fa-bars"></i>
        </button>
        <Link to={{ pathname: "/" }}>
          <Logo />
        </Link>
      </div>
      <ConnectionStatus />
    </header>
  );
}

export default header;
