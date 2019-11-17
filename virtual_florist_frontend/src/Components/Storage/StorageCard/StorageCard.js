import React from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCol,
  MDBCardImage,
  MDBView,
  MDBMask,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

import styleClass from "./StorageCard.module.css";

const ProductCard = props => {
  let isAvailable = {
    icon: "eye-slash",
    text: "disabled"
  };

  if (props.available) {
    isAvailable = {
      icon: "eye",
      text: "enabled"
    };
  }

  const path = "/storage/" + props.id;

  const redirect = "product/" + props.productId;

  return (
    <div className="card-group my-1">
      <MDBCard personal className="mb-md-0 mb-4">
        <MDBCardImage
          className={styleClass.Photo}
          top
          src={props.mainPhoto}
          alt="MDBCard image cap"
        />
        <a>
          <MDBMask overlay="white-slight" />
        </a>

        <MDBCardBody>
          <a onClick={e => props.history.replace(path)}>
            <MDBCardTitle>
              {props.name}-{props.latinName}
            </MDBCardTitle>
          </a>
          <MDBCardText>{props.description}</MDBCardText>
          <hr />
          <a href={redirect} className="card-meta m-2">
            <span>
              <MDBIcon fab icon="product-hunt" />
            </span>
          </a>
          quantity:{props.quantity}
          <a className="card-meta float-center ml-4">
            <span>
              <MDBIcon icon="dollar-sign" />
              {props.price}
            </span>
          </a>
          <a className="card-meta float-right">
            <span>
              <MDBIcon icon={isAvailable.icon} />
              {" " + isAvailable.text}
            </span>
          </a>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ProductCard;
