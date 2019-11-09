import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import Grid from "@material-ui/core/Grid";
import styleClass from "./WikiPage.module.css";

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
          return (
            <Grid lg={4} item key={index}>
              <img className={styleClass.Image} src={photo.path}></img>
            </Grid>
          );
        });
      }

      return (
        <div className={styleClass.All}>
          <Grid container spacing={1}>
            <Grid item lg={12}>
              <h1>
                {wikiEntry.name} - {wikiEntry.latinName}
              </h1>
            </Grid>

            <Grid item lg={9}>
              <h3 className={styleClass.H3}>Description:</h3>
              <p className={styleClass.Text}>{wikiEntry.longDescription}</p>
            </Grid>
            <Grid item lg={3}>
              {photos[0] != null ? photos[0] : ""}
            </Grid>
            <Grid item lg={9}>
              <h3 className={styleClass.H3}>Treatment:</h3>
              <p className={styleClass.Text}>{wikiEntry.treatment}</p>
            </Grid>
            <Grid item lg={3}>
              {photos[1] != null ? photos[1] : ""}
            </Grid>
            <Grid item lg={9}>
              <h3 className={styleClass.H3}>Tips:</h3>
              {tips}
            </Grid>
            <Grid item lg={3}>
              {photos[2] != null ? photos[2] : ""}
            </Grid>
            <Grid item lg={9}>
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
