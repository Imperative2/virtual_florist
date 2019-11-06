import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import noImage from "../../Assets/noImage.png";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

import styleClass from "./Wiki.module.css";

import WikiEntry from "./WikiEntry/WikiEntry";
import WikiPage from "./WikiPage/WikiPage";

class Wiki extends Component {
  componentWillMount() {
    this.props.onDataFetch();
  }

  addClickHandler = () => {
    this.props.history.replace("/wiki/newPage");
  };

  render() {
    let wikiEntries = this.props.wiki.wikiEntries.map((wikiEntry, index) => {
      let mainPhoto = noImage;

      for (let i = 0; i < wikiEntry.photos.length; i++) {
        let photo = wikiEntry.photos[i];
        if (photo.type == "MAIN") {
          mainPhoto = photo.path;
        }
      }

      return (
        <WikiEntry
          key={index}
          id={wikiEntry.wikiEntryId}
          name={wikiEntry.name}
          latinName={wikiEntry.latinName}
          shortDescription={wikiEntry.shortDescription}
          history={this.props.history}
          mainPhoto={mainPhoto}
        ></WikiEntry>
      );
    });

    const buttonStyle = {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed"
    };

    return (
      <div className={styleClass.Wiki}>
        <Fab
          color="primary"
          aria-label="add"
          style={buttonStyle}
          onClick={this.addClickHandler}
        >
          <AddIcon />
        </Fab>

        <p className={styleClass.P}>Wiki</p>
        {wikiEntries}
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
)(Wiki);
