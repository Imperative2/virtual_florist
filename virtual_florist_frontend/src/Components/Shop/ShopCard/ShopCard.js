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

import Grid from "@material-ui/core/Grid";

import { NavLink } from "react-router-dom";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";

import styleClass from "./ShopCard.module.css";

const ShopCard = props => {
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
      <NavLink className="card-meta m-0" to={redirect} exact>
        <span>
          <MDBIcon fab icon="wikipedia-w" />
        </span>
      </NavLink>
    );
  }

  const path = "/shop/" + props.id;

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

          <a onClick={e => props.history.push(path)}>
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

            <Grid container spacing={1}>
              <Grid item xs={3}>
                <a className="card-meta float-left">
                  <span>
                    <MDBIcon icon="dollar-sign" />
                    {props.price}
                  </span>
                </a>
              </Grid>
              <Grid item xs={1}>
                {wiki}
              </Grid>
              <Grid item xs={8}>
                <a className="card-meta float-right">
                  <span>
                    Quantity:
                    {props.quantity}
                  </span>
                </a>
              </Grid>
              <Grid item xs={12}>
                <a className="card-meta float-right">
                  <span>
                    <ButtonGood
                      isDisabled={props.quantity > 0 ? false : true}
                      name={"Add to Cart"}
                      onClickAction={props.buttonAction}
                    />
                  </span>
                </a>
              </Grid>
            </Grid>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default ShopCard;
