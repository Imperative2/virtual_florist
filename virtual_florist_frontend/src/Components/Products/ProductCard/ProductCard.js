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

const SocialPage = () => {
  return (
    <div className="card-group my-5">
      <MDBCard personal className="mb-md-0 mb-4">
        <MDBCardImage
          top
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
          alt="MDBCard image cap"
        />
        <a href="#!">
          <MDBMask overlay="white-slight" />
        </a>

        <MDBCardBody>
          <a href="#!">
            <MDBCardTitle>Anna</MDBCardTitle>
          </a>
          <MDBCardText>Anna is a web designer living in New York.</MDBCardText>
          <hr />
          <a href="#!" className="card-meta">
            <span>
              <MDBIcon icon="warehouse" />
              83 Friends
            </span>
          </a>
          <a href="#!" className="card-meta float-right">
            <span>
              <MDBIcon icon="eye" />
              enabled
            </span>
          </a>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SocialPage;
