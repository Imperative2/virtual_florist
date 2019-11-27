import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import styleClass from "./WikiPage.module.css";
import IMG from "../../UI/LightBox/ImageLightBox";

import { MDBModal } from "mdbreact";

import Modal from "../../UI/Modal/Modal";
import PhotoUpload from "../../Forms/PhotoUpload/PhotoUpload";
import WikiModify from "../../Forms/WikiEntryModify/WikiEntryModify";

class WikiPage extends Component {
  state = {
    showAddFotoModal: false,
    showModifyEntryModal: false,
    dialogOpen: false
  };

  componentWillMount() {
    this.props.onDataFetch();
  }

  deleteButtonHandler = () => {
    this.setState({ dialogOpen: true });
  };

  addPictureButtonHandler = () => {
    this.setState({ showAddFotoModal: true });
  };

  modifyButtonHandler = () => {
    this.setState({ showModifyEntryModal: true });
  };

  closePhotoAddModal = () => {
    this.setState({ showAddFotoModal: false });
  };
  toggleModifyModal = () => {
    this.setState({ showModifyEntryModal: false });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleDialogConfirm = () => {
    this.setState({ dialogOpen: false });
    this.props.onEntryDelete(this.props.match.params.id);
    this.props.history.replace("/wiki");
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
    const buttonModifyStyle = {
      margin: 0,
      top: "auto",
      right: 140,
      bottom: 20,
      left: "auto",
      position: "fixed",
      zIndex: 1000
    };

    let wikiEntry = null;

    for (let i = 0; i < this.props.wiki.wikiEntries.length; i++) {
      if (
        this.props.wiki.wikiEntries[i].wikiEntryId == this.props.match.params.id
      ) {
        wikiEntry = this.props.wiki.wikiEntries[i];
      }
    }

    if (wikiEntry !== null) {
      let tips = wikiEntry.tips.split(";").map((tip, index) => {
        return <li key={index}>{tip}</li>;
      });
      let photos = "No photos";
      if (wikiEntry.photos !== null) {
        photos = wikiEntry.photos.map((photo, index) => {
          return (
            <Grid xl={12} sm={8} md={6} lg={4} item key={index}>
              {/* <img className={styleClass.Image} src={photo.path}></img> */}
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
          <Modal
            show={this.state.showAddFotoModal}
            modalClosed={this.closePhotoAddModal}
          >
            <PhotoUpload
              history={this.props.history}
              wikiEntryId={this.props.match.params.id}
              isWikiEntry={true}
            ></PhotoUpload>
          </Modal>
          <MDBModal
            isOpen={this.state.showModifyEntryModal}
            toggle={this.toggleModifyModal}
          >
            <WikiModify
              history={this.props.history}
              entryToModify={wikiEntry}
            ></WikiModify>
          </MDBModal>
          {this.props.user.user.role === "ADMIN" ? (
            <div>
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
                aria-label="delete"
                style={buttonDeleteStyle}
                onClick={this.deleteButtonHandler}
              >
                <DeleteIcon />
              </Fab>
              <Fab
                aria-label="modify"
                style={buttonModifyStyle}
                onClick={this.modifyButtonHandler}
              >
                <EditIcon />
              </Fab>
            </div>
          ) : null}

          <Grid container spacing={1} justify="center">
            <Grid item xs={12}>
              <h1>
                {wikiEntry.name} - {wikiEntry.latinName}
              </h1>
            </Grid>

            <Grid item xs={12} md={9}>
              <h3 className={styleClass.H3}>Description:</h3>
              <p className={styleClass.Text}>{wikiEntry.longDescription}</p>
            </Grid>
            <Grid item md={3}>
              {photos[0] != null ? photos[0] : ""}
            </Grid>
            <Grid item xs={12} md={9}>
              <h3 className={styleClass.H3}>Treatment:</h3>
              <p className={styleClass.Text}>{wikiEntry.treatment}</p>
            </Grid>
            <Grid item md={3}>
              {photos[1] != null ? photos[1] : ""}
            </Grid>
            <Grid item xs={12} md={9}>
              <h3 className={styleClass.H3}>Tips:</h3>
              {tips}
            </Grid>
            <Grid item md={3}>
              {photos[2] != null ? photos[2] : ""}
            </Grid>
            <Grid item xs={12} md={9}>
              <h3 className={styleClass.H3}>Gallery</h3>
            </Grid>

            {photos}
          </Grid>
        </div>
      );
    }

    return (
      <div>
        wikiPage
        <h2>{this.props.match.params.id}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    wiki: state.wiki
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDataFetch: () => dispatch(actions.fetchWikiEntries()),
    onEntryDelete: wikiEntryId => dispatch(actions.deleteWikiEntry(wikiEntryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WikiPage);
