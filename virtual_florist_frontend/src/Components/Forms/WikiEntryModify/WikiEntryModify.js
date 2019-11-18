import React, { Component } from "react";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";

import Grid from "@material-ui/core/Grid";

import styleClass from "./WikiEntryModify.module.css";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

class WikiEntryModify extends Component {
  state = {
    wikiEntryId: 0,
    name: "",
    latinName: "",
    shortDescription: "",
    longDescription: "",
    treatment: "",
    tips: "",
    tags: ""
  };

  onTextInputHandler = (event, inputIdentifier) => {
    if (inputIdentifier === "name") {
      this.setState({ name: event.target.value });
    } else if (inputIdentifier === "latinName") {
      this.setState({ latinName: event.target.value });
    } else if (inputIdentifier === "shortDescription") {
      this.setState({ shortDescription: event.target.value });
    } else if (inputIdentifier === "longDescription") {
      this.setState({ longDescription: event.target.value });
    } else if (inputIdentifier === "treatment") {
      this.setState({ treatment: event.target.value });
    } else if (inputIdentifier === "tips") {
      this.setState({ tips: event.target.value });
    } else if (inputIdentifier === "tags") {
      this.setState({ tags: event.target.value });
    }
  };

  componentWillMount() {
    this.setState({ ...this.props.entryToModify });
  }

  onFormSubmitHandler = () => {
    const updatedWikiEntry = {
      ...this.state
    };

    this.props.onFormSubmit(updatedWikiEntry);
    this.props.history.replace("/wiki");
  };

  render() {
    return (
      <div className={styleClass.All}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} md={12}>
            <TextInput
              name={"Name:"}
              value={this.state.name}
              onChangeAction={event => this.onTextInputHandler(event, "name")}
            ></TextInput>
          </Grid>
          <Grid item xs={12}>
            <TextInput
              name={"Latin name:"}
              value={this.state.latinName}
              onChangeAction={event =>
                this.onTextInputHandler(event, "latinName")
              }
            ></TextInput>
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              value={this.state.shortDescription}
              name={"Short Description:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "shortDescription")
              }
              rows={2}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              name={"Long description:"}
              value={this.state.longDescription}
              onChangeAction={event =>
                this.onTextInputHandler(event, "longDescription")
              }
              rows={7}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              name={"Treatment:"}
              value={this.state.treatment}
              onChangeAction={event =>
                this.onTextInputHandler(event, "treatment")
              }
              rows={7}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              name={"Tips:"}
              value={this.state.tips}
              onChangeAction={event => this.onTextInputHandler(event, "tips")}
              rows={2}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12}>
            <TextAreaInput
              name={"Tags:"}
              value={this.state.tags}
              onChangeAction={event => this.onTextInputHandler(event, "tags")}
              rows={1}
            ></TextAreaInput>
          </Grid>{" "}
          <Grid item xs={12}>
            <ButtonGood
              name={"Modify"}
              onClickAction={event => this.onFormSubmitHandler()}
            ></ButtonGood>
          </Grid>
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
    onDataFetch: () => dispatch(actions.fetchWikiEntries()),
    onFormSubmit: wikiEntry => dispatch(actions.updateWikiEntry(wikiEntry))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WikiEntryModify);
