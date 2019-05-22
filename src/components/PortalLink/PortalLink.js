import React from "react";

import classes from "./PortalLink.module.scss";

const portalLink = props => {
  let icon;
  switch (props.label) {
    case "Partner Up":
      icon = <i className="fas fa-user-friends"></i>;
      break;
    case "Games":
      icon = <i className="fas fa-gamepad"></i>;
      break;
    case "My Quizzes":
      icon = <i className="fas fa-pencil-alt" />;
      break;
    case "Profile":
      icon = <i className="fas fa-user-circle"></i>
      break;
    default:
      break;
  }
  return (
    <a href={props.href} className={classes.PortalLink}>
      { icon }
      <p>{props.label}</p>
    </a>
  );
};

export default portalLink;
