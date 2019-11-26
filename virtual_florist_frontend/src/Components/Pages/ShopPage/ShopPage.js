import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import styleClass from "./ShopPage.module.css";

import noImage from "../../../Assets/noImage.png";
import IMG from "../../UI/LightBox/ImageLightBox";
import NumberInput from "../../UI/Input/NumberInputSmallHeader/NumberInputSmallHeader";

import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";

import { MDBModal, MDBBtn } from "mdbreact";

class ShopPage extends Component {
  componentWillMount() {
    this.props.onStorageFetch();
  }

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

    if (storage !== null) {
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
                <h1>
                  {storage.product !== null ? storage.product.name : ""}-
                  {storage.product !== null ? storage.product.latinName : ""}
                </h1>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} md={6}>
                  {mainPhoto}
                </Grid>
                <Grid
                  className={styleClass.TopPadding}
                  container
                  item
                  xs={12}
                  md={6}
                  justify="flex-start"
                >
                  <Grid item xs={12}>
                    <p>Price: {storage.product.price}</p>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Quantity: {storage.quantity}</p>
                  </Grid>

                  <Grid className={styleClass.ButtonPadding} item md={3} xs={4}>
                    <MDBBtn className="align-bottom" color="primary">
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </MDBBtn>
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <NumberInput name={"Number of items:"}></NumberInput>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <h3>Description:</h3>
            <p>{storage.product.description}</p>
          </Container>
        </div>
      );
    } else {
      return <div>shop page</div>;
    }
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
