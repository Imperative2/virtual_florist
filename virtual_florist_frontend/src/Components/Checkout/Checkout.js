import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";

import ButtonGood from "../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../UI/Image/SmallImage/SmallImage";

import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBCloseIcon } from "mdbreact";

import styleClass from "./Checkout.module.css";

import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

class Checkout extends Component {
  buttonRemoveHandler = (event, productId, quantity) => {
    console.log(event);
    console.log(productId);
    console.log(quantity);

    if (this.props.user.user.role === "GUEST") {
      const form = {
        productId: productId,
        quantity: -quantity
      };

      this.props.onRemoveItemFromBasket(form);
    } else {
      const form = {
        userId: this.props.user.user.userId,
        productId: productId,
        quantity: -quantity
      };

      this.props.onSentRemoveItemFromBasket(form);
    }
  };

  render() {
    console.log(this.props.basket);

    if (
      this.props.basket !== null &&
      this.props.basket.basketProducts !== null &&
      this.props.basket.basketProducts.length > 0
    ) {
      console.log(this.props);

      let priceSum = 0;

      const checkoutProducts = this.props.basket.basketProducts.map(
        (basketProduct, index) => {
          let product = null;
          let storage = null;
          let mainPhoto = null;

          for (let i = 0; i < this.props.storages.storages.length; i++) {
            if (
              this.props.storages.storages[i].product.productId ==
              basketProduct.product.productId
            ) {
              storage = this.props.storages.storages[i];
              product = this.props.storages.storages[i].product;

              for (let i = 0; i < storage.product.photos.length; i++) {
                let photo = storage.product.photos[i];
                if (photo.type == "MAIN") {
                  mainPhoto = <SmallImage photo={photo}></SmallImage>;
                }
              }

              priceSum += basketProduct.quantity * product.price;

              return (
                <div key={index} className={styleClass.Padding}>
                  <Paper>
                    <Grid container item spacing={3} alignItems="center">
                      <Grid item xs={12} sm={2}>
                        {mainPhoto}
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        {product.name}-{product.latinName}
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        Qty:{basketProduct.quantity}
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        Total Price: ${basketProduct.quantity * product.price}
                      </Grid>
                      <Grid item xs={12} sm={2}>
                        <MDBBtn
                          onClick={event =>
                            this.buttonRemoveHandler(
                              event,
                              product.productId,
                              basketProduct.quantity
                            )
                          }
                          color="danger"
                        >
                          Remove
                        </MDBBtn>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              );
            }
          }

          return null;
        }
      );

      return (
        <div className={styleClass.All}>
          <Container component="main" maxWidth="md">
            <Grid container justify="center" direction="column" spacing={1}>
              {checkoutProducts}
              <Grid container justify="center" item>
                <ButtonGood name={"$" + priceSum}></ButtonGood>
              </Grid>
            </Grid>
          </Container>
        </div>
      );
    } else {
      this.props.history.push("/");
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    storages: state.storages,
    products: state.products,
    basket: state.basket,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStorageFetch: () => dispatch(actions.fetchStorages()),
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onWikiEntriesFetch: () => dispatch(actions.fetchWikiEntries()),

    onAddProductToBasket: form => dispatch(actions.addItemToBasket(form)),
    onRemoveItemFromBasket: form =>
      dispatch(actions.removeItemFromBasket(form)),
    onSentRemoveItemFromBasket: form =>
      dispatch(actions.sendRemoveItemFromBasket(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
