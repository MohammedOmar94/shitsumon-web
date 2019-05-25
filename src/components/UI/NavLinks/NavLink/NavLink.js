import React from "react";
import { Link } from 'react-router-dom'


import classes from "./NavLink.module.scss";

const navLink = props => {
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
    <Link to={{pathname: props.href}} className={classes.NavLink}>
      { icon }
      <p>{props.label}</p>
    </Link>
  );
};

export default navLink;
