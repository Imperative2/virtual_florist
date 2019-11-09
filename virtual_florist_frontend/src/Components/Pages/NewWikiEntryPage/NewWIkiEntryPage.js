import React, { Component } from "react";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import Grid from "@material-ui/core/Grid";
import styleClass from "./NewWikiEntryPage.module.css";
import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

class NewWikiEntryPage extends Component {
  state = {
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

  onFormSubmitHandler = () => {
    const newWikiEntry = {
      ...this.state
    };

    this.props.onFormSubmit(newWikiEntry);
    this.props.history.replace("/wiki");
  };

  render() {
    return (
      <div className={styleClass.NewWikiEntryPage}>
        newWikiPage
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} md={9} lg={9}>
            <TextInput
              name={"Name:"}
              onChangeAction={event => this.onTextInputHandler(event, "name")}
            ></TextInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextInput
              name={"Latin name:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "latinName")
              }
            ></TextInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput
              name={"Short Description:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "shortDescription")
              }
              rows={2}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput
              name={"Long description:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "longDescription")
              }
              rows={7}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput
              name={"Treatment:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "treatment")
              }
              rows={7}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput
              name={"Tips:"}
              onChangeAction={event => this.onTextInputHandler(event, "tips")}
              rows={2}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput
              name={"Tags:"}
              onChangeAction={event => this.onTextInputHandler(event, "tags")}
              rows={1}
            ></TextAreaInput>
          </Grid>{" "}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <ButtonGood
              name={"Add"}
              onClickAction={event => this.onFormSubmitHandler()}
            ></ButtonGood>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <ButtonBad
              name={"Cancel"}
              onClickAction={() => this.props.history.replace("/wiki")}
            ></ButtonBad>
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
    onFormSubmit: newWikiEntry => dispatch(actions.addWikiEntry(newWikiEntry))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWikiEntryPage);
