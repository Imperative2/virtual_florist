import React from "react";
import styleClass from "./TextInput.module.css";

const TextareaPage = props => {
  return (
    <div className="form-group">
      <label className={styleClass.Text} htmlFor="exampleFormControlTextarea1">
        {props.name}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={props.rows}
      />
    </div>
  );
};

export default TextareaPage;