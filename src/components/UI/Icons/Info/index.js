import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

Info.propTypes = {
  className: PropTypes.string
};

function Info({ className }) {
  const componentClasses = classnames("fas fa-info-circle", className);

  return <i className={componentClasses} />;
}

export default Info;
