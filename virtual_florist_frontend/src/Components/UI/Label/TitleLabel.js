import React from "react";
import styleClass from "./TitleLabel.module.css";

const titleLabel = props => {
  return <h1 className={styleClass.H1}>{props.name}</h1>;
};

export default titleLabel;
