import React, { Component } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";

import ButtonGood from "../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../UI/Image/SmallImage/SmallImage";
import TabPanel from "../UI/TabPanel/TabPanel";

import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBCloseIcon } from "mdbreact";
import { MDBModal } from "mdbreact";

import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

import styleClass from "./Orders.module.css";

import TitleLabel from "../UI/Label/TitleLabel";

import Order from "./Order/Order";
import OrderProduct from "./OrderProduct/OrderProduct";

class Orders extends Component {
  state = {
    value: 0,
    showModal: false,
    selectedOrder: this.props.order.orders[0]
  };

  componentWillMount() {
    this.props.onStorageFetch();
    this.props.onProductFetch();
    this.props.onOrdersFetch();
  }

  a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  detailsButtonHandler = index => {
    console.log("we are invoked index " + index);
    this.setState({ selectedOrder: this.props.order.orders[index] });
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    console.log(this.props.order);
    console.log(this.props.products);

    let pending = "PENDING";
    let completed = "COMPLETED";
    let cancelled = "CANCELED";

    let pendingOrders = [];
    let completedOrders = [];
    let cancelledOrders = [];

    this.props.order.orders.map(order => {
      if (order.status === "COMPLETED") {
        completedOrders.push(order);
      } else if (order.status === "CANCELLED") {
        cancelledOrders.push(order);
      } else {
        pendingOrders.push(order);
      }
    });

    let products = this.state.selectedOrder.orderProducts.map(orderProduct => {
      let foundProduct = null;
      let mainPhoto = null;

      for (let i = 0; i < this.props.products.products.length; i++) {
        if (
          orderProduct.product.productId ==
          this.props.products.products[i].productId
        ) {
          foundProduct = this.props.products.products[i];
          break;
        }
      }

      if (foundProduct !== null) {
        for (let i = 0; i < foundProduct.photos.length; i++) {
          let photo = foundProduct.photos[i];
          if (photo.type == "MAIN") {
            mainPhoto = <SmallImage photo={photo}></SmallImage>;
          }
        }

        return (
          <OrderProduct
            mainPhoto={mainPhoto}
            name={foundProduct.name}
            latinName={foundProduct.latinName}
            quantity={orderProduct.quantity}
            price={foundProduct.price}
          ></OrderProduct>
        );
      }
    });

    pending = pendingOrders.map((order, index) => {
      return (
        <Grid item xs={12}>
          <Order
            buttonAction={() => this.detailsButtonHandler(index)}
            order={order}
          >
            {" "}
          </Order>
        </Grid>
      );
    });

    return (
      <div>
        <MDBModal isOpen={this.state.showModal} toggle={this.closeModal}>
          {products}
        </MDBModal>

        <div className={styleClass.All}>
          <TitleLabel name="Shop Page"></TitleLabel>
          <div>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="COMPLETED" {...this.a11yProps(0)} />
                <Tab label="PENDING" {...this.a11yProps(1)} />
                <Tab label="CANCELLED" {...this.a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={"x"}
              index={this.state.value}
              onChangeIndex={index => this.handleChangeIndex(index)}
            >
              <TabPanel value={this.state.value} index={0} dir={"x"}>
                <Grid container alignContent="center" spacing={2}>
                  {completed}
                </Grid>
              </TabPanel>
              <TabPanel value={this.state.value} index={1} dir={"x"}>
                <Grid container spacing={2}>
                  {pending}
                </Grid>
              </TabPanel>
              <TabPanel value={this.state.value} index={2} dir={"x"}>
                <Grid container spacing={2}>
                  {cancelled}
                </Grid>
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    storages: state.storages,
    user: state.user,
    basket: state.basket,
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onStorageFetch: () => dispatch(actions.fetchStorages()),
    onOrdersFetch: () => dispatch(actions.fetchAllOrders())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
