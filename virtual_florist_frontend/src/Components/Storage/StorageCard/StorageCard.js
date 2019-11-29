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

import { NavLink } from "react-router-dom";

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
        <NavLink className="card-meta m-0" to={path} exact>
          <MDBCardImage
            className={styleClass.Photo}
            top
            src={props.mainPhoto}
            alt="MDBCard image cap"
          />
        </NavLink>
        <a>
          <MDBMask overlay="white-slight" />
        </a>

        <MDBCardBody>
          <a onClick={e => props.history.push(path)}>
            <MDBCardTitle>
              {props.name.substring(0, 25)}
              {props.name.length > 25 ? "..." : ""}-{props.latinName}
            </MDBCardTitle>
          </a>
          <MDBCardText>
            {" "}
            {props.description.substring(0, 220)}
            {props.description.length > 219 ? "..." : ""}
          </MDBCardText>
          <hr />
          <NavLink to={redirect} exact={true}>
            <span>
              <MDBIcon fab icon="product-hunt" />
            </span>
          </NavLink>
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
