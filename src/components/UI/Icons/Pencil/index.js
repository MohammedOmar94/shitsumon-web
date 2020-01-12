import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

Pencil.propTypes = {
  className: PropTypes.string
};

function Pencil({ className }) {
  const componentClasses = classnames("fas fa-pencil-alt", className);

  return <i className={componentClasses} />;
}

export default Pencil;
