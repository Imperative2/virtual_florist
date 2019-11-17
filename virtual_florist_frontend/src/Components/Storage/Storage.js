import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import styleClass from "./Storage.module.css";

import TitleLabel from "../UI/Label/TitleLabel";
import noImage from "../../Assets/noImage.png";
import StorageCard from "./StorageCard/StorageCard";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

class Store extends Component {
  componentWillMount() {
    this.props.onStorageFetch();
    this.props.onProductFetch();
  }

  addClickHandler = () => {
    this.props.history.replace("/storage/newStorage");
  };

  render() {
    const buttonStyle = {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
      zIndex: 1000
    };

    console.log(this.props);

    let storages = this.props.storages.storages.map((storage, index) => {
      let mainPhoto = noImage;

      for (let i = 0; i < storage.product.photos.length; i++) {
        let photo = storage.product.photos[i];
        if (photo.type == "MAIN") {
          mainPhoto = photo.path;
        }
      }

      return (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <StorageCard
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
          ></StorageCard>
        </Grid>
      );
    });

    return (
      <div className={styleClass.All}>
        <Fab
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.addClickHandler}
        >
          <AddIcon />
        </Fab>
        <TitleLabel name="Storage"></TitleLabel>
        <Grid container spacing={2}>
          {storages}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    storages: state.storages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onStorageFetch: () => dispatch(actions.fetchStorages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
