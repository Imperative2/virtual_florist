import React from "react";
import styleClasses from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem.js";
import Router from "react-dom";

const navigationItems = () => {
  return (
    <ul className={styleClasses.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
