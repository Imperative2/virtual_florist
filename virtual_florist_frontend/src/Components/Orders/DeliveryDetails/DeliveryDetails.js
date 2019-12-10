import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../../UI/Image/SmallImage/SmallImage";

import TextArea from "../../UI/Input/TextArea/TextArea";

import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBCloseIcon } from "mdbreact";

const userDetails = props => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <hr></hr>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="country"
            label="Country"
            type="country"
            id="country"
            autoComplete="country"
            defaultValue={props.country}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="city"
            label="City"
            type="city"
            id="city"
            autoComplete="address-level2"
            defaultValue={props.city}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="street"
            label="Street"
            type="street"
            id="street"
            autoComplete="address-line1"
            defaultValue={props.street}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            name="localNumber"
            label="Local number"
            type="text"
            id="localNumber"
            autoComplete="address-line2"
            disabled={true}
            defaultValue={props.localNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="zipCode"
            label="Zip Code"
            type="zipCode"
            id="zipCode"
            autoComplete="postal-code"
            defaultValue={props.zipCode}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextArea
            name="Comment"
            rows={5}
            value={props.comment}
            disabled={true}
          ></TextArea>
        </Grid>
      </Grid>
    </div>
  );
};

export default userDetails;
