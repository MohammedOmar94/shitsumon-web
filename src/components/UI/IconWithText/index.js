import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

IconWithText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconClassName: PropTypes.string,
  iconSize: PropTypes.oneOf(["medium", "big"])
};

IconWithText.defaultProps = {
  iconSize: "medium"
};

function IconWithText({
  className,
  children,
  icon: Icon,
  iconClassName,
  iconSize
}) {
  const componentClasses = classnames("iconWithText", className);
  const iconClasses = classnames(
    "iconWithText__icon",
    `iconWithText__icon--${iconSize}`,
    iconClassName,
    iconSize
  );

  return (
    <span className={componentClasses}>
      <Icon className={iconClasses} />
      {children}
    </span>
  );
}

export default IconWithText;
