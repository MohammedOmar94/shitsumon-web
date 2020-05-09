import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

button.propTypes = {
  id: PropTypes.string,
  disableHover: PropTypes.bool,
  rouned: PropTypes.bool,
  selected: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  type: PropTypes.oneOf(["default", "back"])
};

button.defaultProps = {
  disableHover: false,
  rouned: false,
  theme: "dark",
  type: "default"
};

function button({
  id,
  className,
  children,
  onClick,
  onMouseUp,
  disableHover,
  rounded,
  selected,
  theme,
  type
}) {
  const defaultBtnClasses = classnames(
    "button",
    { "button--active": selected },
    { "button--disableHover": disableHover },
    { "button--rounded": rounded },
    { "button--lightTheme": theme === "light" },
    { "button--darkTheme": theme === "dark" },
    className
  );

  const backBtnClasses = classnames(
    "fas fa-arrow-circle-left",
    "button__close",
    className
  );

  if (type === "default") {
    return (
      <button
        id={id}
        className={defaultBtnClasses}
        onClick={onClick}
        onMouseUp={onMouseUp}
      >
        {children}
      </button>
    );
  } else if (type === "back") {
    return <i onClick={onClick} className={backBtnClasses}></i>;
  }
}

export default button;
