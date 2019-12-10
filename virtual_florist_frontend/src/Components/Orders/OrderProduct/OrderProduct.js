import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../../UI/Image/SmallImage/SmallImage";

import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBCloseIcon } from "mdbreact";

import styleClass from "./OrderProduct.module.css";

const orderProduct = props => {
  return (
    <div className={styleClass.All}>
      <Paper>
        <Grid container item spacing={3} alignItems="center">
          <Grid item xs={12} sm={3}>
            {props.mainPhoto}
          </Grid>
          <Grid item xs={12} sm={5}>
            {props.name}-{props.latinName}
          </Grid>
          <Grid item xs={12} sm={2}>
            Qty:{props.quantity}
          </Grid>
          <Grid item xs={12} sm={2}>
            Total Price: ${props.quantity * props.price}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default orderProduct;
