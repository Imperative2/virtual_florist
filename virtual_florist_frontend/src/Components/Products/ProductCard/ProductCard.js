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

import styleClass from "./ProductCard.module.css";

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

  let wiki = null;
  if (props.wikiEntry !== null) {
    const redirect = "/wiki/" + props.wikiEntry.wikiEntryId;

    wiki = (
      <NavLink to={redirect}>
        <span>
          <MDBIcon fab icon="wikipedia-w" />
        </span>
      </NavLink>
    );
  }

  const path = "/product/" + props.id;

  return (
    <div className={styleClass.All}>
      <div className="card-group my-1">
        <MDBCard personal className="mb-md-0 mb-4">
          <NavLink className="card-meta m-0" to={path} exact>
            <MDBCardImage
              className={styleClass.Photo}
              top
              src={props.mainPhoto}
              alt="mainPicture"
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
              {props.description.substring(0, 220)}
              {props.description.length > 219 ? "..." : ""}
            </MDBCardText>
            <hr />
            {wiki}
            <a className="card-meta float-center">
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
    </div>
  );
};

export default ProductCard;
