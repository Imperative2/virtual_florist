import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink } from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-0">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Information</h5>
            <p>Here you can find all sorts of usefull information</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <NavLink to="/contact">Contact Info</NavLink>
              </li>

              <li className="list-unstyled">
                <a href="#!">About us </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms of Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Help</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/mainMenu"> Karol Masluch </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
