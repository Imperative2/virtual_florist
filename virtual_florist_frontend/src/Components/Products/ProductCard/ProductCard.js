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
      <a href={redirect} className="card-meta m-2">
        <span>
          <MDBIcon fab icon="wikipedia-w" />
        </span>
      </a>
    );
  }

  const path = "/product/" + props.id;

  return (
    <div className="card-group my-5">
      <MDBCard personal className="mb-md-0 mb-4">
        <MDBCardImage top src={props.mainPhoto} alt="MDBCard image cap" />
        <a href={path}>
          <MDBMask overlay="white-slight" />
        </a>

        <MDBCardBody>
          <a href={path}>
            <MDBCardTitle>
              {props.name}-{props.latinName}
            </MDBCardTitle>
          </a>
          <MDBCardText>{props.description}</MDBCardText>
          <hr />
          {wiki}
          <a href="#!" className="card-meta float-center">
            <span>
              <MDBIcon icon="dollar-sign" />
              {props.price}
            </span>
          </a>
          <a href="#!" className="card-meta float-right">
            <span>
              <MDBIcon icon={isAvailable.icon} />
              {isAvailable.text}
            </span>
          </a>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ProductCard;
