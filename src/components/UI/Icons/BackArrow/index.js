import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

BackArrow.propTypes = {
  className: PropTypes.string
};

function BackArrow({ className }) {
  const componentClasses = classnames("fas fa-arrow-circle-left", className);

  return <i className={componentClasses} />;
}

export default BackArrow;
