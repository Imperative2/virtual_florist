import React from "react";
import styleClass from "./TextInput.module.css";

const TextareaPage = props => {
  return (
    <div className={styleClass.All}>
      <div className="form-group text-left">
        <label
          className={styleClass.Text}
          htmlFor="exampleFormControlTextarea1"
        >
          {props.name}
        </label>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          rows={props.rows}
          onChange={props.onChangeAction}
          value={props.value}
          disabled={props.disabled}
          defaultValue={props.defaultValue}
        ></textarea>
      </div>
    </div>
  );
};

export default TextareaPage;
