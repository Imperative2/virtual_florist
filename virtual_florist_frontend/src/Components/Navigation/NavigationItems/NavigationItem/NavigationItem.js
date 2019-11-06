import React from "react";
import styleClasses from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const navigationItem = props => {
  return (
    <li className={styleClasses.NavigationItem}>
      <NavLink
        activeClassName={styleClasses.active}
        to={props.link}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
