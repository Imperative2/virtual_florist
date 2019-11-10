import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

class InputPage extends Component {
  state = {
    selectedFile: null,
    fileName: "Choose file",
    description: "asdf",
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

  onSendPhotoHandler = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    let picToUpload = {
      formData: formData,
      productId: 0,
      wikiEntryId: this.props.wikiEntryId,
      type: this.state.type,
      description: this.state.description,
      enabled: "1"
    };

    this.props.onPicutreUplaod(picToUpload);
  };

  render() {
    return (
      <div>
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
        <label>Photo type:</label>
        <select className="browser-default custom-select">
          <option value="SIDE">SIDE</option>
          <option value="MAIN">MAIN</option>
        </select>

        <button onClick={this.onSendPhotoHandler}>asdfasdf</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPicutreUplaod: picToUpload => dispatch(actions.uploadFiles(picToUpload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InputPage);
