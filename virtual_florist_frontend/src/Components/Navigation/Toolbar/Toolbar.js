import React from "react";
import styleClasses from "./Toolbar.module.css";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle.js";

const toolbar = props => {
  return (
    <header className={styleClasses.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
      <Logo height="80%"></Logo>
      <nav className={styleClasses.DesktopOnly}>
        <NavigationItems role={props.role}></NavigationItems>
      </nav>
    </header>
  );
};

export default toolbar;
