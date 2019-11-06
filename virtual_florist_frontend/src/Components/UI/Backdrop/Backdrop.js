import React from "react";
import styleClasses from "./Backdrop.module.css";

const backdrop = props => {
  return props.show ? (
    <div className={styleClasses.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backdrop;
