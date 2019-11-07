import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

import noImage from "../../Assets/noImage.png";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

import styleClass from "./Wiki.module.css";

import WikiEntry from "./WikiEntry/WikiEntry";

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
        <Grid item xs={12} sm={4}>
          <WikiEntry
            key={index}
            id={wikiEntry.wikiEntryId}
            name={wikiEntry.name}
            latinName={wikiEntry.latinName}
            shortDescription={wikiEntry.shortDescription}
            history={this.props.history}
            mainPhoto={mainPhoto}
          ></WikiEntry>
        </Grid>
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
        <Grid container spacing={3}>
          {wikiEntries}
        </Grid>
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
