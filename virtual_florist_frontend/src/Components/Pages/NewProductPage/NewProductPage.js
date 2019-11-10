import React, { Component } from "react";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import Grid from "@material-ui/core/Grid";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";

import TitleLabel from "../../UI/Label/TitleLabel";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { FormControlLabel, Checkbox } from "@material-ui/core";

class NewWikiEntryPage extends Component {
  state = {
    price: "",
    name: "",
    latinName: "",
    description: "",
    type: "",
    tags: "",
    available: "",
    wikiEntryId: ""
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
    this.props.history.replace("/product");
  };

  render() {
    return (
      <div>
        <TitleLabel name="New Product Page"></TitleLabel>

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
              name={"Description:"}
              onChangeAction={event =>
                this.onTextInputHandler(event, "description")
              }
              rows={2}
            ></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}></Grid>
          <Grid item xs={12} md={9} lg={9}>
            <label>Type:</label>
            <select>
              <option value="SINGLE">SINGLE</option>
              <option value="BOUQUET">BOUQUET</option>
              <option value="OTHER">OTHER</option>
            </select>
          </Grid>

          <Grid item xs={12} md={9} lg={9}>
            <TextInput
              name={"Tags:"}
              onChangeAction={event => this.onTextInputHandler(event, "tags")}
              rows={1}
            ></TextInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <FormControlLabel
              control={<Checkbox value="checkedA" />}
              label="Is available"
            />
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextInput
              name={"Price:"}
              onChangeAction={event => this.onTextInputHandler(event, "tags")}
              rows={1}
            ></TextInput>
          </Grid>

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
