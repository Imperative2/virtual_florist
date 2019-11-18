import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";
import TitleLabel from "../../UI/Label/TitleLabel";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import Modal from "../../UI/Modal/Modal";
import PhotoUpload from "../../Forms/PhotoUpload/PhotoUpload";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import NumberInput from "../../UI/Input/NumberInput/NumberInput";

import IMG from "../../UI/LightBox/ImageLightBox";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

import styleClass from "./ProductPage.module.css";

import { MDBBtn } from "mdbreact";

class ProductPage extends Component {
  state = {
    showAddFotoModal: false,
    product: {
      price: "",
      name: "",
      latinName: "",
      description: "",
      type: "SINGLE",
      tags: "",
      available: false,
      wikiEntry: {
        wikiEntryId: ""
      }
    }
  };

  componentWillMount() {
    this.props.onProductFetch();
    this.props.onWikiEntryFetch();

    let product = null;

    for (let i = 0; i < this.props.products.products.length; i++) {
      if (
        this.props.products.products[i].productId == this.props.match.params.id
      ) {
        product = this.props.products.products[i];
      }
    }
    if (product !== null) {
      this.setState({ product });
    }
  }

  refreshHandler = () => {
    let product = null;
    for (let i = 0; i < this.props.products.products.length; i++) {
      if (
        this.props.products.products[i].productId == this.props.match.params.id
      ) {
        product = this.props.products.products[i];
      }
    }
    if (product !== null) {
      this.setState({ product });
    }
  };

  deleteButtonHandler = () => {
    this.props.onProductDelete(this.props.match.params.id);
    this.props.history.replace("/product");
  };

  addPictureButtonHandler = () => {
    this.setState({ showAddFotoModal: true });
  };

  closePhotoAddModal = () => {
    this.setState({ showAddFotoModal: false });
  };

  onModifyButtonClicked = () => {
    this.props.onProductUpdate(this.state.product);
    this.props.history.replace("/product");
  };

  onTextInputHandler = (event, inputIdentifier) => {
    const newState = { ...this.state };

    if (inputIdentifier === "name") {
      newState.product.name = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "latinName") {
      newState.product.latinName = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "description") {
      newState.product.description = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "tags") {
      newState.product.tags = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "price") {
      newState.product.price = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "type") {
      newState.product.type = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "wikiId") {
      if (newState.product.wikiEntry === null) {
        newState.product.wikiEntry = { wikiEntryId: null };
      }

      newState.product.wikiEntry.wikiEntryId = event.target.value;
      this.setState(newState);
    } else if (inputIdentifier === "available") {
      newState.product.available = !this.state.product.available;
      this.setState(newState);
    }
  };

  render() {
    const buttonAddStyle = {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
      zIndex: 1000
    };
    const buttonDeleteStyle = {
      margin: 0,
      top: "auto",
      right: 80,
      bottom: 20,
      left: "auto",
      position: "fixed",
      zIndex: 1000
    };

    let product = null;
    let photos = null;

    for (let i = 0; i < this.props.products.products.length; i++) {
      if (
        this.props.products.products[i].productId == this.props.match.params.id
      ) {
        product = this.props.products.products[i];
      }
    }

    if (product !== null) {
      if (product.photos !== null) {
        photos = product.photos.map((photo, index) => {
          return (
            <Grid item key={index} xs={12} xl={6} lg={4}>
              <IMG photo={photo}></IMG>
            </Grid>
          );
        });
      }

      const wikiEntryOptions = this.props.wiki.wikiEntries.map(
        (wikiEntry, index) => {
          return (
            <option key={wikiEntry.wikiEntryId} value={wikiEntry.wikiEntryId}>
              {wikiEntry.wikiEntryId}: {wikiEntry.name}-{wikiEntry.latinName}
            </option>
          );
        }
      );

      return (
        <div className={styleClass.All}>
          <Modal
            show={this.state.showAddFotoModal}
            modalClosed={this.closePhotoAddModal}
          >
            <PhotoUpload
              history={this.props.history}
              productId={this.props.match.params.id}
              isWikiEntry={false}
            ></PhotoUpload>
          </Modal>
          <Fab
            color="primary"
            aria-label="add"
            style={buttonAddStyle}
            onClick={this.addPictureButtonHandler}
          >
            <AddIcon></AddIcon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="add"
            style={buttonDeleteStyle}
            onClick={this.deleteButtonHandler}
          >
            <DeleteIcon />
          </Fab>
          <TitleLabel name="Product Page"></TitleLabel>

          <Grid
            container
            justify="flex-start"
            alignItems="flex-end"
            spacing={1}
          >
            <Grid container spacing={1} justify="center" alignItems="flex-end">
              <Grid item xs={12} md={9} lg={9}>
                <TextInput
                  name={"Name:"}
                  value={this.state.product.name}
                  onChangeAction={event =>
                    this.onTextInputHandler(event, "name")
                  }
                ></TextInput>
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <TextInput
                  name={"Latin name:"}
                  value={this.state.product.latinName}
                  onChangeAction={event =>
                    this.onTextInputHandler(event, "latinName")
                  }
                ></TextInput>
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <TextAreaInput
                  name={"Description:"}
                  value={this.state.product.description}
                  onChangeAction={event =>
                    this.onTextInputHandler(event, "description")
                  }
                  rows={2}
                ></TextAreaInput>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextInput
                  name={"Tags:"}
                  value={this.state.product.tags}
                  onChangeAction={event =>
                    this.onTextInputHandler(event, "tags")
                  }
                  rows={1}
                ></TextInput>
              </Grid>
              <Grid item xs={11} md={3} lg={3}>
                <FormControlLabel
                  onClick={event => this.onTextInputHandler(event, "available")}
                  control={
                    <Checkbox
                      value={this.state.product.available}
                      checked={this.state.product.available}
                    />
                  }
                  label="Is available"
                />
              </Grid>
              <Grid item xs={12} md={9} lg={9}>
                <NumberInput
                  name={"Price:"}
                  value={this.state.product.price}
                  onChangeAction={event =>
                    this.onTextInputHandler(event, "price")
                  }
                  rows={1}
                ></NumberInput>
              </Grid>
              <Grid item xs={11} md={8} lg={8}>
                <label>Type:</label>
                <select
                  value={this.state.product.type}
                  onChange={event => this.onTextInputHandler(event, "type")}
                >
                  <option value="SINGLE">SINGLE</option>
                  <option value="BOUQUET">BOUQUET</option>
                  <option value="OTHER">OTHER</option>
                </select>
                <label>WikiEntry:</label>
                <select
                  value={
                    this.state.product.wikiEntry !== null
                      ? this.state.product.wikiEntry.wikiEntryId
                      : ""
                  }
                  onChange={event => this.onTextInputHandler(event, "wikiId")}
                >
                  <option value={null}>NONE</option>
                  {wikiEntryOptions}
                </select>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={styleClass.Button}>
                <ButtonGood
                  name={"Modify"}
                  onClickAction={event => this.onModifyButtonClicked()}
                ></ButtonGood>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={styleClass.Button}>
                <MDBBtn onClick={this.refreshHandler}>Refresh</MDBBtn>
              </div>
            </Grid>
            {photos}
          </Grid>
        </div>
      );
    }

    return (
      <div>
        productPage
        <h2>{this.props.match.params.id}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wiki: state.wiki,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onWikiEntryFetch: () => dispatch(actions.fetchWikiEntries()),
    onProductFetch: () => dispatch(actions.fetchProducts()),
    onProductDelete: productId => dispatch(actions.deleteProduct(productId)),
    onProductUpdate: product => dispatch(actions.updateProduct(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
