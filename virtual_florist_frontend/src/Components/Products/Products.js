import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import styleClass from "./Products.module.css";

import TitleLabel from "../UI/Label/TitleLabel";
import noImage from "../../Assets/noImage.png";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

class Products extends Component {
  componentWillMount() {
    this.props.onDataFetch();
  }

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

    let products = this.props.products.products.map((product, index) => {
      let mainPhoto = noImage;

      for (let i = 0; i < product.photos.length; i++) {
        let photo = product.photos[i];
        if (photo.type == "MAIN") {
          mainPhoto = photo.path;
        }
      }

      return (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            id={product.productId}
            name={product.name}
            latinName={product.latinName}
            description={product.description}
            history={this.props.history}
            mainPhoto={mainPhoto}
            available={product.available}
            price={product.price}
            wikiEntry={product.wikiEntry}
          ></ProductCard>
        </Grid>
      );
    });

    return (
      <div className={styleClass.All}>
        <Fab color="primary" aria-label="add" style={buttonStyle}>
          <AddIcon />
        </Fab>
        <TitleLabel name="Products"></TitleLabel>
        <Grid container spacing={2}>
          {products}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDataFetch: () => dispatch(actions.fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
