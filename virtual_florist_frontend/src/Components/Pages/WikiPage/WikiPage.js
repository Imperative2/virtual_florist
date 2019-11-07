import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

class WikiPage extends Component {
  componentWillMount() {
    this.props.onDataFetch();
  }
  render() {
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
          return <img key={index} src={photo.path}></img>;
        });
      }

      return (
        <div>
          <h1>
            {wikiEntry.name} - {wikiEntry.latinName}
          </h1>
          <p>Description:</p>
          <p>{wikiEntry.longDescription}</p>
          <p>Treatment:</p>
          <p>{wikiEntry.treatment}</p>
          <p>Tips:</p>
          {tips}
          <p>Gallery</p>
          {photos}
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
    wiki: state.wiki
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDataFetch: () => dispatch(actions.fetchWikiEntries())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiPage);
