import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import TextInput from "../../UI/Input/TextInput/TextInput";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import styleClass from "./PhotoUpload.module.css";

class InputPage extends Component {
  state = {
    selectedFile: null,
    fileName: "Choose file",
    description: "",
    type: "MAIN"
  };

  onFileChangeHandler = e => {
    console.log(e.target.files[0]);

    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0],
      fileName: e.target.files[0].name
    });
  };

  onDescriptionChangeHandler = event => {
    this.setState({ description: event.target.value });
  };

  onSendPhotoHandler = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    let picToUpload;

    if (this.props.isWikiEntry === true) {
      picToUpload = {
        formData: formData,
        productId: 0,
        wikiEntryId: this.props.wikiEntryId,
        type: this.state.type,
        description: this.state.description,
        enabled: "1"
      };
    } else {
      picToUpload = {
        formData: formData,
        productId: this.props.productId,
        wikiEntryId: 0,
        type: this.state.type,
        description: this.state.description,
        enabled: "1"
      };
    }

    this.props.onPicutreUplaod(picToUpload);
    if (this.props.isWikiEntry === true) {
      const path = "/wiki/" + this.props.wikiEntryId;
      this.props.history.replace(path);
    } else {
      const path = "/product/" + this.props.productId;
      this.props.history.replace(path);
    }
  };

  render() {
    let sendEnabled = false;
    if (this.state.selectedFile !== null) sendEnabled = true;

    return (
      <div className={styleClass.All}>
        <Grid container spacing={1}></Grid>
        <Grid item>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">
                Upload
              </span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                onChange={this.onFileChangeHandler}
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                {this.state.fileName}
              </label>
            </div>
          </div>
        </Grid>
        <Grid item>
          <label>Photo type:</label>
          <select className="browser-default custom-select">
            <option value="SIDE">SIDE</option>
            <option value="MAIN">MAIN</option>
          </select>
        </Grid>
        <Grid item>
          <label>Description:</label>
          <TextInput
            onChangeAction={this.onDescriptionChangeHandler}
          ></TextInput>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={!sendEnabled}
            onClick={this.onSendPhotoHandler}
          >
            Send
          </Button>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPicutreUplaod: picToUpload => dispatch(actions.uploadFiles(picToUpload))
  };
};

export default connect(null, mapDispatchToProps)(InputPage);
