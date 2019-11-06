import React from "react";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import styleClasses from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import Aux from "../../hoc/AUXX/Auxiliary";

const sideDrawer = props => {
  let attachedClasses = [styleClasses.SideDrawer, styleClasses.Close];
  if (props.open) {
    attachedClasses = [styleClasses.SideDrawer, styleClasses.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className={styleClasses.Logo}>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
