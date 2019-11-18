import React from "react";
import styleClass from "./NumberInput.module.css";

const NumberInput = props => {
  return (
    <div className={styleClass.All}>
      <div className="form-group text-left">
        <label className={styleClass.Text} htmlFor="formGroupExampleInput">
          {props.name}
        </label>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput"
          onChange={props.onChangeAction}
          value={props.value}
        ></input>
      </div>
    </div>
  );
};

export default NumberInput;
