import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import ButtonGood from "../../UI/Button/ButtonGood/ButtonGood";
import SmallImage from "../../UI/Image/SmallImage/SmallImage";

import { MDBBtn, MDBIcon } from "mdbreact";
import { MDBCloseIcon } from "mdbreact";

import styleClass from "./UserDetails.module.css";

const userDetails = props => {
  return (
    <div className={styleClass.All}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            disabled={true}
            autoFocus
            defaultValue={props.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            disabled={true}
            name="lastName"
            autoComplete="lname"
            defaultValue={props.surname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="e-mail"
            autoComplete="email"
            disabled={true}
            defaultValue={props.email}
          />
        </Grid>

        <Grid item xs={12}>
          <hr></hr>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="phoneNumber"
            id="phoneNumber"
            disabled={true}
            defaultValue={props.phoneNumber}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default userDetails;
