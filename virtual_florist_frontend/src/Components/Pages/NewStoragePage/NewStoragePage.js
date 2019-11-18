import React, { Fragment, Component } from "react";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import NumberInput from "../../UI/Input/NumberInput/NumberInput";
import Grid from "@material-ui/core/Grid";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";

import TitleLabel from "../../UI/Label/TitleLabel";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import styleClass from "./NewStoragePage.module.css";

class NewStoragePage extends Component {
  state = {
    selectedProductId: null,
    available: false,
    quantity: 0
  };

  componentWillMount() {
    this.props.onFetchProducts();
    this.props.onFetchStorages();
  }

  onTextInputHandler = (event, inputIdentifier) => {
    console.log(event.target.value);
    if (inputIdentifier === "quantity") {
      this.setState({ quantity: event.target.value });
    } else if (inputIdentifier === "product") {
      if (event.target.value === "NONE") {
        this.setState({ selectedProductId: null });
      } else {
        this.setState({ selectedProductId: event.target.value });
      }
    } else if (inputIdentifier === "available") {
      this.setState({ available: !this.state.available });
    }
  };

  onFormSubmitHandler = () => {
    const newStorage = {
      ...this.state
    };

    this.props.onFormSubmit(newStorage);
    this.props.history.replace("/storage");
  };

  render() {
    const productLength = this.props.products.products.length;
    const storageLength = this.props.storages.storages.length;

    let validProducts = [];
    let invalidStoragesProducts = [];

    for (let i = 0; i < storageLength; i++) {
      invalidStoragesProducts.push(
        this.props.storages.storages[i].product.productId
      );
    }
    console.log(this.props.storages.storages);
    console.log(this.props.products.products);
    console.log(invalidStoragesProducts);

    for (let i = 0; i < productLength; i++) {
      if (this.props.products.products[i].available === true) {
        if (
          invalidStoragesProducts.includes(
            this.props.products.products[i].productId
          ) === false
        ) {
          validProducts.push(this.props.products.products[i]);
        }
      }
    }

    console.log(validProducts);

    const productOptions = validProducts.map(product => {
      return (
        <option key={product.productId} value={product.productId}>
          {product.productId}: {product.name}-{product.latinName}: $
          {product.price}
        </option>
      );
    });

    let selectedProduct = null;
    for (let i = 0; i < this.props.products.products.length; i++) {
      console.log(this.props.products.products[i].productId);
      if (
        this.props.products.products[i].productId ==
        this.state.selectedProductId
      ) {
        selectedProduct = this.props.products.products[i];
      }
    }

    console.log("selectedProduct:");
    console.log(selectedProduct);
    console.log(this.state);

    const selectedProductInfo = (
      <Fragment>
        <Grid item xs={12} md={11} lg={11}>
          <div className={styleClass.ProductDiv}>
            <p className={styleClass.LabelPar}>Name:</p>
            <p>{selectedProduct !== null ? selectedProduct.name : ""}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <div className={styleClass.ProductDiv}>
            <p className={styleClass.LabelPar}>Latin name:</p>
            <p>{selectedProduct !== null ? selectedProduct.latinName : ""}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <div className={styleClass.ProductDiv}>
            <p className={styleClass.LabelPar}>Description:</p>
            <p>{selectedProduct !== null ? selectedProduct.description : ""}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <div className={styleClass.ProductDiv}>
            <p className={styleClass.LabelPar}>Tags:</p>
            <p>{selectedProduct !== null ? selectedProduct.tags : ""}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <div className={styleClass.ProductDiv}>
            <p className={styleClass.LabelPar}>Price:</p>
            <p>{selectedProduct !== null ? selectedProduct.price : ""}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          <div className={styleClass.ProductDiv}>
            <p className={styleClass.LabelPar}>Type:</p>
            <p>{selectedProduct !== null ? selectedProduct.type : ""}</p>
          </div>
        </Grid>
      </Fragment>
    );

    return (
      <div className={styleClass.All}>
        <TitleLabel name="New Storage Page"></TitleLabel>

        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item xs={12} md={11} lg={11}>
            <label className={styleClass.Label}>Product:</label>
            <select
              onChange={event => this.onTextInputHandler(event, "product")}
            >
              <option value={null}>NONE</option>
              {productOptions}
            </select>
          </Grid>
          {selectedProduct !== null ? selectedProductInfo : null}
          <Grid item xs={12} md={3} lg={3}>
            <FormControlLabel
              onClick={event => this.onTextInputHandler(event, "available")}
              control={<Checkbox value="true" />}
              label="Is available"
            />
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <NumberInput
              name={"Quantity:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "quantity")
              }
              rows={1}
            ></NumberInput>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <ButtonGood
              isDisabled={this.state.selectedProductId === null}
              name={"Add"}
              onClickAction={event => this.onFormSubmitHandler()}
            ></ButtonGood>
          </Grid>

          <Grid item xs={6} sm={6} md={5} lg={5}>
            <ButtonBad
              name={"Cancel"}
              onClickAction={() => this.props.history.replace("/storage")}
            ></ButtonBad>
          </Grid>
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
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onFetchStorages: () => dispatch(actions.fetchStorages()),
    onFormSubmit: newProduct => dispatch(actions.addProduct(newProduct))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStoragePage);
