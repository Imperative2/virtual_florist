import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = props => {
  return (
    <Fragment>
      <MDBBtn rounded color="danger" onClick={props.onClickAction}>
        {props.name}
      </MDBBtn>
    </Fragment>
  );
};

export default ButtonPage;
