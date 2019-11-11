import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";

import Modal from "../../UI/Modal/Modal";
import PhotoUpload from "../../Forms/PhotoUpload/PhotoUpload";

class ProductPage extends Component {
  state = {
    showAddFotoModal: false
  };

  componentWillMount() {
    this.props.onProductFetch();
  }

  deleteButtonHandler = () => {
    this.props.onEntryDelete(this.props.match.params.id);
    this.props.history.replace("/product");
  };

  addPictureButtonHandler = () => {
    this.setState({ showAddFotoModal: true });
  };

  closePhotoAddModal = () => {
    this.setState({ showAddFotoModal: false });
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
            <Grid lg={4} item key={index}>
              <img src={photo.path}></img>
            </Grid>
          );
        });
      }

      return (
        <div>
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

          <Grid container>{photos}</Grid>
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
    onProductFetch: () => dispatch(actions.fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
