import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import styleClass from "./Products.module.css";

class Products extends Component {
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

    return (
      <div className={styleClass.All}>
        <Fab color="primary" aria-label="add" style={buttonStyle}>
          <AddIcon />
        </Fab>
        <h1 className={styleClass.H1}>Products</h1>
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Products;
