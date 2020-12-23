import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

Redo.propTypes = {
  className: PropTypes.string
};

function Redo({ className }) {
  const componentClasses = classnames("fas fa-redo", className);

  return <i className={componentClasses} />;
}

export default Redo;
