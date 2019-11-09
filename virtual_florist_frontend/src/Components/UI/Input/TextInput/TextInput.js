import React from "react";
import styleClass from "./TextInput.module.css";

const InputPage = props => {
  return (
    <div className="form-group">
      <label className={styleClass.Text} htmlFor="formGroupExampleInput">
        {props.name}
      </label>
      <input type="text" className="form-control" id="formGroupExampleInput" />
    </div>
  );
};

export default InputPage;
