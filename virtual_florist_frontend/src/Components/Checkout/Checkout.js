import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";

import ButtonGood from "../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../UI/Image/SmallImage/SmallImage";

import styleClass from "./Checkout.module.css";

import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

class Checkout extends Component {
  state = {
    totalPrice: 0
  };

  render() {
    console.log(this.props.basket);

    if (
      this.props.basket !== null &&
      this.props.basket.basketProducts !== null
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

              console.log(basketProduct);

              priceSum += basketProduct.quantity * product.price;

              return (
                <div key={index} className={styleClass.Padding}>
                  <Paper>
                    <Grid container item spacing={3}>
                      <Grid item>{mainPhoto}</Grid>
                      <Grid item>
                        {product.name}-{product.latinName}
                      </Grid>
                      <Grid item>Qty:{basketProduct.quantity}</Grid>
                      <Grid item>
                        Total Price: {basketProduct.quantity * product.price}
                      </Grid>
                      <Grid item>
                        <button> X </button>
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
              <Grid item>
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
    basket: state.basket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStorageFetch: () => dispatch(actions.fetchStorages()),
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onWikiEntriesFetch: () => dispatch(actions.fetchWikiEntries()),

    onAddProductToBasket: form => dispatch(actions.addItemToBasket(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
