import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Grid from "@material-ui/core/Grid";

import TitleLabel from "../UI/Label/TitleLabel";
import noImage from "../../Assets/noImage.png";
import styleClass from "./Shop.module.css";
import TabPanel from "../UI/TabPanel/TabPanel";
import ShopCard from "./ShopCard/ShopCard";
import { config } from "../../config";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

class Shop extends Component {
  state = {
    value: 0
  };

  componentWillMount() {
    this.props.onStorageFetch();
    this.props.onProductFetch();
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

  handleAddItemToBasket = productId => {
    console.log(productId);

    if (this.props.user.user.role === "GUEST") {
      const form = {
        productId: productId,
        quantity: 1
      };

      this.props.onAddProductToBasket(form);
    } else {
      const form = {
        userId: this.props.user.user.userId,
        productId: productId,
        quantity: 1
      };

      this.props.onSendProductToBasket(form);
    }
  };

  render() {
    let singles = this.props.storages.storages.map((storage, index) => {
      let mainPhoto = noImage;

      if (storage.product.type !== "SINGLE" || storage.enabled === false)
        return null;

      for (let i = 0; i < storage.product.photos.length; i++) {
        let photo = storage.product.photos[i];
        if (photo.type == "MAIN") {
          mainPhoto = config.serverURL + photo.path;
        }
      }

      return (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <ShopCard
            id={storage.storageId}
            productId={storage.product.productId}
            name={storage.product.name}
            latinName={storage.product.latinName}
            description={storage.product.description}
            history={this.props.history}
            mainPhoto={mainPhoto}
            available={storage.enabled}
            price={storage.product.price}
            quantity={storage.quantity}
            wikiEntry={storage.product.wikiEntry}
            buttonAction={() =>
              this.handleAddItemToBasket(storage.product.productId)
            }
          ></ShopCard>
        </Grid>
      );
    });

    const bouquets = this.props.storages.storages.map((storage, index) => {
      let mainPhoto = noImage;

      if (storage.product.type !== "BOUQUET") return null;

      for (let i = 0; i < storage.product.photos.length; i++) {
        let photo = storage.product.photos[i];
        if (photo.type == "MAIN") {
          mainPhoto = config.serverURL + photo.path;
        }
      }

      return (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <ShopCard
            id={storage.storageId}
            productId={storage.product.productId}
            name={storage.product.name}
            latinName={storage.product.latinName}
            description={storage.product.description}
            history={this.props.history}
            mainPhoto={mainPhoto}
            available={storage.enabled}
            price={storage.product.price}
            quantity={storage.quantity}
            wikiEntry={storage.product.wikiEntry}
            buttonAction={() =>
              this.handleAddItemToBasket(storage.product.productId)
            }
          ></ShopCard>
        </Grid>
      );
    });

    const other = this.props.storages.storages.map((storage, index) => {
      let mainPhoto = noImage;

      if (storage.product.type !== "OTHER") return null;

      for (let i = 0; i < storage.product.photos.length; i++) {
        let photo = storage.product.photos[i];
        if (photo.type == "MAIN") {
          mainPhoto = config.serverURL + photo.path;
        }
      }

      return (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <ShopCard
            id={storage.storageId}
            productId={storage.product.productId}
            name={storage.product.name}
            latinName={storage.product.latinName}
            description={storage.product.description}
            history={this.props.history}
            mainPhoto={mainPhoto}
            available={storage.enabled}
            price={storage.product.price}
            quantity={storage.quantity}
            wikiEntry={storage.product.wikiEntry}
            buttonAction={() =>
              this.handleAddItemToBasket(storage.product.productId)
            }
          ></ShopCard>
        </Grid>
      );
    });

    return (
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
              <Tab label="Singles" {...this.a11yProps(0)} />
              <Tab label="Bouquets" {...this.a11yProps(1)} />
              <Tab label="Other" {...this.a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={"x"}
            index={this.state.value}
            onChangeIndex={index => this.handleChangeIndex(index)}
          >
            <TabPanel value={this.state.value} index={0} dir={"x"}>
              <Grid container spacing={2}>
                {singles}
              </Grid>
            </TabPanel>
            <TabPanel value={this.state.value} index={1} dir={"x"}>
              <Grid container spacing={2}>
                {bouquets}
              </Grid>
            </TabPanel>
            <TabPanel value={this.state.value} index={2} dir={"x"}>
              <Grid container spacing={2}>
                {other}
              </Grid>
            </TabPanel>
          </SwipeableViews>
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
    basket: state.basket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onStorageFetch: () => dispatch(actions.fetchStorages()),
    onAddProductToBasket: form => dispatch(actions.addItemToBasket(form)),
    onSendProductToBasket: form => dispatch(actions.sendItemToBasket(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
