import React, { Component } from "react";
import TextAreaInput from "../../UI/Input/TextArea/TextArea";
import TextInput from "../../UI/Input/TextInput/TextInput";
import Grid from "@material-ui/core/Grid";
import styleClass from "./NewWikiEntryPage.module.css";
import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import ButtonBad from "../../UI/Button/ButtonBad/ButtonBad";

class NewWikiEntryPage extends Component {
  render() {
    return (
      <div className={styleClass.NewWikiEntryPage}>
        newWikiPage
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} md={9} lg={9}>
            <TextInput name={"Name:"}></TextInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextInput name={"Latin name:"}></TextInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput name={"Short Description:"} rows={2}></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput name={"Long description:"} rows={7}></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput name={"Treatment:"} rows={7}></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput name={"Tips:"} rows={2}></TextAreaInput>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <TextAreaInput name={"Tags:"} rows={1}></TextAreaInput>
          </Grid>{" "}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <ButtonGood name={"Add"}></ButtonGood>
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

export default NewWikiEntryPage;
