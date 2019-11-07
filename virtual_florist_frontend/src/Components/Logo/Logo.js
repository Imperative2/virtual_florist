import React from "react";
import Logo from "../../Assets/logo.png";
import styleClasses from "./Logo.module.css";

const logo = props => {
  return (
    <div className={styleClasses.Logo} style={{ height: props.height }}>
      <img src={Logo} alt="MyFlowerShop"></img>
    </div>
  );
};

export default logo;
