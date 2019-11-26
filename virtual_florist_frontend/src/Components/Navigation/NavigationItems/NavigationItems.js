import React from "react";
import styleClasses from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem.js";
import Router from "react-dom";
import UserMenu from "./userMenu/UserMenu";
import Cart from "./Cart/Cart";

const navigationItems = props => {
  if (props.role === "ADMIN") {
    return (
      <ul className={styleClasses.NavigationItems}>
        <NavigationItem link="/mainPage" exact>
          Main Menu
        </NavigationItem>
        <NavigationItem link="/wiki">Wiki</NavigationItem>
        <NavigationItem link="/product">Products</NavigationItem>
        <NavigationItem link="/storage">Storage</NavigationItem>
        <NavigationItem link="/order">Orders</NavigationItem>
        <NavigationItem link="/shop">Shop</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
        <UserMenu></UserMenu>
        <Cart></Cart>
      </ul>
    );
  } else if (props.role === "USER") {
    return (
      <ul className={styleClasses.NavigationItems}>
        <NavigationItem link="/mainPage" exact>
          Main Menu
        </NavigationItem>
        <NavigationItem link="/wiki">Wiki</NavigationItem>
        <NavigationItem link="/shop">Shop</NavigationItem>
        <UserMenu></UserMenu>
        <Cart></Cart>
      </ul>
    );
  } else {
    return (
      <ul className={styleClasses.NavigationItems}>
        <NavigationItem link="/mainPage" exact>
          Main Menu
        </NavigationItem>
        <NavigationItem link="/wiki">Wiki</NavigationItem>
        <NavigationItem link="/shop">Shop</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
        <Cart></Cart>
      </ul>
    );
  }
};

export default navigationItems;
