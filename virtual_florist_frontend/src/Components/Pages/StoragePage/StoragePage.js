import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";
import TitleLabel from "../../UI/Label/TitleLabel";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddPhotoAlternate";
import ExposureIcon from "@material-ui/icons/Exposure";
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

import styleClass from "./StoragePage.module.css";

import { MDBModal, MDBBtn } from "mdbreact";

class StoragePage extends Component {
  state = {
    showQuantityModal: false,
    modalQuantity: 0,
    quantityChanged: false,
    dialogOpen: false,
    storage: {
      enabled: false,
      quantity: 0,
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
    }
  };

  componentWillMount() {
    this.props.onStorageFetch();
    this.props.onProductFetch();

    let storage = null;

    for (let i = 0; i < this.props.storages.storages.length; i++) {
      if (
        this.props.storages.storages[i].storageId == this.props.match.params.id
      ) {
        storage = this.props.storages.storages[i];
      }
    }
    if (storage !== null) {
      this.setState({ storage });
    }
  }

  refreshHandler = () => {
    this.props.onStorageFetch();
    let storage = null;
    for (let i = 0; i < this.props.storages.storages.length; i++) {
      if (
        this.props.storages.storages[i].storageId == this.props.match.params.id
      ) {
        storage = this.props.storages.storages[i];
      }
    }
    if (storage !== null) {
      console.log(storage);
      console.log(this.state);
      this.setState({ storage });
    }
  };

  addQuantityButtonHandler = () => {
    this.setState({ showQuantityModal: true });
  };

  toggleQuantityModal = () => {
    this.setState({ showQuantityModal: false });
  };

  deleteButtonHandler = () => {
    this.setState({ dialogOpen: true });
  };

  onQuantityAddButtonHandler = () => {
    let form = {
      storageId: this.state.storage.storageId,
      quantity: this.state.modalQuantity
    };
    this.props.onStorageQuantityChange(form);
    this.toggleQuantityModal();
    this.forceUpdate();
  };

  onModifyButtonClicked = () => {
    const storage = {
      storageId: this.state.storage.storageId,
      quantity: this.state.storage.quantity,
      enabled: this.state.storage.enabled
    };

    this.props.onStorageUpdate(storage);
    this.props.history.replace("/storage");
  };

  onTextInputHandler = (event, inputIdentifier) => {
    let newState = { ...this.state };

    if (inputIdentifier === "quantity") {
      newState.modalQuantity = event.target.value;
      newState.quantityChanged = true;
      this.setState(newState);
    } else if (inputIdentifier === "available") {
      newState.storage.enabled = !this.state.storage.enabled;
      this.setState(newState);
    }
    console.log(this.state);
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleDialogConfirm = () => {
    this.setState({ dialogOpen: false });
    this.props.onStorageDelete(this.state.storage);
    this.props.history.replace("/storage");
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

    let storage = null;
    let photos = null;

    for (let i = 0; i < this.props.storages.storages.length; i++) {
      if (
        this.props.storages.storages[i].storageId == this.props.match.params.id
      ) {
        storage = this.props.storages.storages[i];
      }
    }
    // console.log(storage);

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

      return (
        <div className={styleClass.All}>
          <Dialog
            open={this.state.dialogOpen}
            onClose={this.handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to delete this wiki entry?"}
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={this.handleDialogConfirm} color="primary">
                Yes
              </Button>
              <Button
                onClick={this.handleDialogClose}
                color="primary"
                autoFocus
              >
                No
              </Button>
            </DialogActions>
          </Dialog>

          <MDBModal
            isOpen={this.state.showQuantityModal}
            toggle={this.toggleQuantityModal}
          >
            <NumberInput
              value={0}
              name={"Add or remove Quantity of an item:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "quantity")
              }
              rows={1}
            ></NumberInput>
            <div className={styleClass.Button}>
              <ButtonGood
                isDisabled={!this.state.quantityChanged}
                name={"Add/Remove"}
                onClickAction={event => this.onQuantityAddButtonHandler()}
              ></ButtonGood>
            </div>
          </MDBModal>
          <Fab
            color="primary"
            aria-label="add"
            style={buttonAddStyle}
            onClick={this.addQuantityButtonHandler}
          >
            <ExposureIcon></ExposureIcon>
          </Fab>

          <Fab
            color="secondary"
            aria-label="delete"
            style={buttonDeleteStyle}
            onClick={this.deleteButtonHandler}
          >
            <DeleteIcon />
          </Fab>
          <TitleLabel name="Storage Page"></TitleLabel>

          <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item xs={12} md={11} lg={11}>
              <div className={styleClass.ProductDiv}>
                <p className={styleClass.LabelPar}>Name:</p>
                <p>{storage.product !== null ? storage.product.name : ""}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
              <div className={styleClass.ProductDiv}>
                <p className={styleClass.LabelPar}>Latin name:</p>
                <p>
                  {storage.product !== null ? storage.product.latinName : ""}
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
              <div className={styleClass.ProductDiv}>
                <p className={styleClass.LabelPar}>Description:</p>
                <p>
                  {storage.product !== null ? storage.product.description : ""}
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
              <div className={styleClass.ProductDiv}>
                <p className={styleClass.LabelPar}>Tags:</p>
                <p>{storage.product !== null ? storage.product.tags : ""}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
              <div className={styleClass.ProductDiv}>
                <p className={styleClass.LabelPar}>Price:</p>
                <p>{storage.product !== null ? storage.product.price : ""}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={11} lg={11}>
              <div className={styleClass.ProductDiv}>
                <p className={styleClass.LabelPar}>Type:</p>
                <p>{storage.product !== null ? storage.product.type : ""}</p>
              </div>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <NumberInput
                disabled={true}
                currentValue={this.state.storage.quantity}
                name={"Quantity:"}
                onChangeAction={event =>
                  this.onTextInputHandler(event, "quantity")
                }
                rows={1}
              ></NumberInput>
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
              <FormControlLabel
                onClick={event => this.onTextInputHandler(event, "available")}
                control={
                  <Checkbox
                    value={this.state.storage.enabled}
                    checked={this.state.storage.enabled}
                  />
                }
                label="Is available"
              />
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
        storagePage
        <h2>{this.props.match.params.id}</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoragePage);
