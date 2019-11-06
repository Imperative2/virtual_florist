import React from "react";
import image from "../../Assets/2.png";
import styleClass from "./topLogo.module.css";

const topLogo = () => {
  return (
    <div className={styleClass.topLogo}>
      <img src={image}></img>
    </div>
  );
};

export default topLogo;
