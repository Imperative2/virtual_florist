import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

import styleClass from "./Wiki.module.css";

import WikiEntry from "./WikiEntry/WikiEntry";
import AddButton from "./AddButton";

class Wiki extends Component {
  componentWillMount() {
    this.props.onDataFetch();
  }

  render() {
    console.log(this.props.wiki);

    let wikiEntries = this.props.wiki.wikiEntries.map(wikiEntry => {
      return (
        <WikiEntry
          name={wikiEntry.name}
          latinName={wikiEntry.latinName}
          shortDescription={wikiEntry.shortDescription}
        ></WikiEntry>
      );
    });

    console.log(wikiEntries);

    return (
      <div className={styleClass.Wiki}>
        <p className={styleClass.p}>Wiki</p>
        {wikiEntries}
        <AddButton></AddButton>
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
