import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = props => {
  return (
    <Fragment>
      <MDBBtn
        disabled={props.isDisabled}
        color="primary"
        rounded
        onClick={props.onClickAction}
      >
        {props.name}
        {props.children}
      </MDBBtn>
    </Fragment>
  );
};

export default ButtonPage;
