import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import IconWithText from "../IconWithText";
import BackArrow from "../Icons/BackArrow";
import Redo from "../Icons/Redo";

button.propTypes = {
  rouned: PropTypes.bool,
  selected: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  type: PropTypes.oneOf(["default", "back", "retry"])
};

button.defaultProps = {
  rouned: false,
  theme: "dark",
  type: "default"
};

function button({
  className,
  children,
  onClick,
  rounded,
  selected,
  theme,
  type
}) {
  const defaultBtnClasses = classnames(
    "button",
    { "button--active": selected },
    { "button--rounded": rounded },
    { "button--lightTheme": theme === "light" },
    { "button--darkTheme": theme === "dark" },
    className
  );

  const backButtonClasses = classnames(
    "button",
    "button--darkTheme",
    className
  );

  const backIconClasses = classnames(
    "fas fa-arrow-circle-left",
    "button__backIcon"
  );

  return (
    <>
      {type === "default" &&
        <button className={defaultBtnClasses} onClick={onClick}>
          {children}
        </button>
      }
      {type === "back" && (
        <button onClick={onClick} className={backButtonClasses}>
          <IconWithText
            icon={BackArrow}
            iconClassName={backIconClasses}
            iconSize="big"
          >
            Go back
          </IconWithText>
        </button>
      )}
      {type === "retry" &&
        <button onClick={onClick} className={backButtonClasses}>
          <IconWithText
            icon={Redo}
            iconClassName={backIconClasses}
            iconSize="big"
          >
            Retry
          </IconWithText>
        </button>
      }
    </>
  );
}

export default button;
