import React, { Component } from "react";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import NumberInput from "../../UI/Input/NumberInput/NumberInput";
import Grid from "@material-ui/core/Grid";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";

import TitleLabel from "../../UI/Label/TitleLabel";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import styleClass from "./NewProductPage.module.css";

class NewWikiEntryPage extends Component {
  state = {
    price: "",
    name: "",
    latinName: "",
    description: "",
    type: "SINGLE",
    tags: "",
    available: false,
    wikiEntryId: ""
  };

  componentWillMount() {
    this.props.onDataFetch();
  }

  onTextInputHandler = (event, inputIdentifier) => {
    if (inputIdentifier === "name") {
      this.setState({ name: event.target.value });
    } else if (inputIdentifier === "latinName") {
      this.setState({ latinName: event.target.value });
    } else if (inputIdentifier === "description") {
      this.setState({ description: event.target.value });
    } else if (inputIdentifier === "tags") {
      this.setState({ tags: event.target.value });
    } else if (inputIdentifier === "price") {
      this.setState({ price: event.target.value });
    } else if (inputIdentifier === "type") {
      this.setState({ type: event.target.value });
    } else if (inputIdentifier === "wikiId") {
      this.setState({ wikiEntryId: event.target.value });
    } else if (inputIdentifier === "available") {
      this.setState({ available: !this.state.available });
    }
  };

  onFormSubmitHandler = () => {
    const newProduct = {
      ...this.state
    };

    this.props.onFormSubmit(newProduct);
    this.props.history.replace("/product");
  };

  render() {
    const wikiEntryOptions = this.props.wiki.wikiEntries.map(
      (wikiEntry, index) => {
        return (
          <option key={index} value={wikiEntry.wikiEntryId}>
            {wikiEntry.wikiEntryId}: {wikiEntry.name}-{wikiEntry.latinName}
          </option>
        );
      }
    );

    return (
      <div className={styleClass.All}>
        <TitleLabel name="New Product Page"></TitleLabel>

        <Grid container spacing={1} justify="center" alignItems="flex-end">
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

          <Grid item xs={12} md={6} lg={6}>
            <TextInput
              name={"Tags:"}
              onChangeAction={event => this.onTextInputHandler(event, "tags")}
              rows={1}
            ></TextInput>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControlLabel
              onClick={event => this.onTextInputHandler(event, "available")}
              control={<Checkbox value="true" />}
              label="Is available"
            />
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <NumberInput
              name={"Price:"}
              onChangeAction={event => this.onTextInputHandler(event, "price")}
              rows={1}
            ></NumberInput>
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <label className={styleClass.Label}>Type:</label>
            <select onChange={event => this.onTextInputHandler(event, "type")}>
              <option value="SINGLE">SINGLE</option>
              <option value="BOUQUET">BOUQUET</option>
              <option value="OTHER">OTHER</option>
            </select>
            <label className={styleClass.Label}>WikiEntry:</label>
            <select
              onChange={event => this.onTextInputHandler(event, "wikiId")}
            >
              <option value={null}>NONE</option>
              {wikiEntryOptions}
            </select>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
            <ButtonGood
              name={"Add"}
              onClickAction={event => this.onFormSubmitHandler()}
            ></ButtonGood>
          </Grid>

          <Grid item xs={6} sm={6} md={5} lg={5}>
            <ButtonBad
              name={"Cancel"}
              onClickAction={() => this.props.history.replace("/product")}
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
    onFormSubmit: newProduct => dispatch(actions.addProduct(newProduct))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewWikiEntryPage);
