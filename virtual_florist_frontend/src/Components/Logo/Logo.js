import React from "react";
import burgerLogo from "../../logo.svg";
import styleClasses from "./Logo.module.css";

const logo = props => {
  return (
    <div className={styleClasses.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="MyBurger"></img>
    </div>
  );
};

export default logo;
