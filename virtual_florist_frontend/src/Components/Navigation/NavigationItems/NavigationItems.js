import React from "react";
import styleClasses from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem.js";
import Router from "react-dom";

const navigationItems = () => {
  return (
    <ul className={styleClasses.NavigationItems}>
      <NavigationItem link="/mainPage" exact>
        Main Menu
      </NavigationItem>
      <NavigationItem link="/Wiki">Wiki</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
    </ul>
  );
};

export default navigationItems;
