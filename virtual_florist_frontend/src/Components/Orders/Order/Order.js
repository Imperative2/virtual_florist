import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../../UI/Image/SmallImage/SmallImage";

import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBCloseIcon } from "mdbreact";
import { MDBModal } from "mdbreact";

import styleClass from "./Order.module.css";

import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";

class Order extends Component {
  state = {
    showModal: false
  };

  detailsButtonHandler = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className={styleClass.All}>
        <Paper>
          <Grid
            container
            item
            spacing={3}
            alignItems="center"
            alignContent="center"
          >
            <Grid item xs={12} sm={1}>
              ID:{this.props.order.orderId}
            </Grid>
            <Grid item xs={12} sm={3}>
              Delivery date: {this.props.order.deliveryDate.slice(0, 10)}
            </Grid>
            <Grid item xs={12} sm={3}>
              Purchased date: {this.props.order.date.slice(0, 10)}
            </Grid>
            <Grid item xs={12} sm={1}>
              ${this.props.order.totalPrice}
            </Grid>
            <Grid item xs={12} sm={2}>
              DeliveryType: {this.props.order.deliveryType.name}
            </Grid>
            <Grid item xs={12} sm={2}>
              <MDBBtn color="primary" onClick={this.props.buttonAction}>
                Details
              </MDBBtn>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Order;
