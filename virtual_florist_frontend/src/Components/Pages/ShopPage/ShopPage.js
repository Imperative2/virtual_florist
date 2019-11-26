import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import styleClass from "./ShopPage.module.css";

import noImage from "../../../Assets/noImage.png";
import IMG from "../../UI/LightBox/ImageLightBox";
import NumberInput from "../../UI/Input/NumberInput/NumberInput";

import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";

class ShopPage extends Component {
  render() {
    let storage = null;
    let photos = null;
    let mainPhoto = noImage;

    for (let i = 0; i < this.props.storages.storages.length; i++) {
      if (
        this.props.storages.storages[i].storageId == this.props.match.params.id
      ) {
        storage = this.props.storages.storages[i];
      }
    }

    if (storage.product.photos !== null) {
      photos = storage.product.photos.map((photo, index) => {
        return (
          <Grid item key={index} xs={12} xl={6} lg={4}>
            <IMG photo={photo}></IMG>
          </Grid>
        );
      });
    }

    for (let i = 0; i < storage.product.photos.length; i++) {
      let photo = storage.product.photos[i];
      if (photo.type == "MAIN") {
        mainPhoto = <IMG photo={photo}></IMG>;
      }
    }

    return (
      <div className={styleClass.All}>
        <Container component="main" maxWidth="md" spacing={1}>
          <Grid container>
            <Grid item>
              <p>
                {storage.product !== null ? storage.product.name : ""}-
                {storage.product !== null ? storage.product.latinName : ""}
              </p>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                {mainPhoto}
              </Grid>
              <Grid item xs={6}>
                <p>Price: {storage.product.price}</p>
                <p>Quantity: {storage.quantity}</p>
                <NumberInput name={"adsfasdf"}></NumberInput>
                <button>Add to cart</button>
              </Grid>
            </Grid>
          </Grid>
          <h3>Description:</h3>
          <p>{storage.product.description}</p>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    storages: state.storages,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStorageFetch: () => dispatch(actions.fetchStorages()),
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onStorageUpdate: storage => dispatch(actions.updateStorage(storage)),
    onStorageQuantityChange: form => dispatch(actions.changeQuantity(form)),
    onStorageDelete: storage => dispatch(actions.deleteStorage(storage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
