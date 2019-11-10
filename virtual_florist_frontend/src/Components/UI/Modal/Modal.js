import React from "react";
import styleClasses from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop.js";
import Aux from "../../hoc/AUXX/Auxiliary";

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
    <div
      className={styleClasses.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        oppacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
