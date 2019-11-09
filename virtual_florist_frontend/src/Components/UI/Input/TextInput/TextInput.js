import React from "react";
import styleClass from "./TextInput.module.css";

const InputPage = props => {
  return (
    <div className="form-group text-left">
      <label className={styleClass.Text} htmlFor="formGroupExampleInput">
        {props.name}
      </label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        onChange={props.onChangeAction}
      />
    </div>
  );
};

export default InputPage;
