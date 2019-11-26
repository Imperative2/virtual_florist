import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import TitleLabel from "../../UI/Label/TitleLabel";

import { NavLink } from "react-router-dom";

import styleClass from "./UserInfoPage.module.css";

import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";

class UserInfoPage extends Component {
  state = {
    form: {
      firstName: {
        value: "",
        validation: {
          required: true,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      lastName: {
        value: "",
        validation: {
          required: true,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      email1: {
        value: "",
        validation: {
          required: true,
          email: true
        },
        valid: true,
        touched: false
      },
      password1: {
        value: "",
        validation: {
          required: false,
          minLength: 6
        },
        valid: true,
        touched: false
      },
      phoneNumber: {
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },

      country: {
        value: "",
        validation: {
          required: true,
          lettersOnly: true
        },
        valid: true,
        touched: false
      },
      city: {
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      street: {
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      localNumber: {
        value: "",
        validation: {
          required: false
        },
        valid: true,
        touched: false
      },
      zipCode: {
        value: "",
        validation: {
          required: true
        },
        valid: true,
        touched: false
      }
    },

    formIsValid: false
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    };

    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkIfValid(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifiers in updatedForm) {
      formIsValid = updatedForm[inputIdentifiers].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  };

  checkIfValid = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.lettersOnly) {
      const regex = new RegExp("^[A-Z,a-z, ]+$");
      const result = value.match(regex);
      if (result === null) {
        isValid = false;
      }
    }

    if (rules.email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = value.match(regex);
      console.log(result);
      if (result === null) {
        isValid = false;
      }
    }

    if (rules.email2) {
      if (value !== this.state.form.email1.value) {
        isValid = false;
      }
    }

    if (rules.password2) {
      if (value !== this.state.form.password1.value) {
        isValid = false;
      }
    }

    return isValid;
  };

  onFormSubmitHandle = () => {
    const form = {
      name: this.state.form.firstName.value,
      surname: this.state.form.lastName.value,
      email: this.state.form.email1.value,
      password: this.state.form.password1.value,
      phoneNumber: this.state.form.phoneNumber.value,
      country: this.state.form.country.value,
      city: this.state.form.city.value,
      street: this.state.form.street.value,
      localNumber: this.state.form.localNumber.value,
      zipCode: this.state.form.zipCode.value
    };
    this.props.onUserRegister(form);
  };

  render() {
    console.log(this.props.user.user);
    return (
      <div className={styleClass.All}>
        <TitleLabel name={"User information"}></TitleLabel>
        <Container component="main" maxWidth="xs">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "firstName")}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                defaultValue={this.props.user.user.name}
                error={
                  this.state.form.firstName.touched !== false &&
                  this.state.form.firstName.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "lastName")}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                defaultValue={this.props.user.user.surname}
                error={
                  this.state.form.lastName.touched !== false &&
                  this.state.form.lastName.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "email1")}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="New Email Address"
                name="email"
                type="e-mail"
                autoComplete="email"
                defaultValue={this.props.user.user.email}
                error={
                  this.state.form.email1.touched !== false &&
                  this.state.form.email1.valid === false
                    ? true
                    : false
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "password1")}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="New Password (min length: 6)"
                type="password"
                id="password"
                autoComplete="current-password"
                error={
                  this.state.form.password1.touched !== false &&
                  this.state.form.password1.valid === false
                    ? true
                    : false
                }
              />
            </Grid>

            <Grid item xs={12}>
              <hr></hr>
              <TextField
                onChange={e => this.inputChangedHandler(e, "country")}
                variant="outlined"
                required
                fullWidth
                name="country"
                label="Country"
                type="country"
                id="country"
                autoComplete="country"
                defaultValue={this.props.user.user.adress.country}
                error={
                  this.state.form.country.touched !== false &&
                  this.state.form.country.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "city")}
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="city"
                id="city"
                autoComplete="address-level2"
                defaultValue={this.props.user.user.adress.city}
                error={
                  this.state.form.city.touched !== false &&
                  this.state.form.city.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "street")}
                variant="outlined"
                required
                fullWidth
                name="street"
                label="Street"
                type="street"
                id="street"
                autoComplete="address-line1"
                defaultValue={this.props.user.user.adress.street}
                error={
                  this.state.form.street.touched !== false &&
                  this.state.form.street.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "localNumber")}
                variant="outlined"
                fullWidth
                name="localNumber"
                label="Local number"
                type="text"
                id="localNumber"
                autoComplete="address-line2"
                defaultValue={this.props.user.user.adress.localNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "zipCode")}
                variant="outlined"
                required
                fullWidth
                name="zipCode"
                label="Zip Code"
                type="zipCode"
                id="zipCode"
                autoComplete="postal-code"
                defaultValue={this.props.user.user.adress.zipCode}
                error={
                  this.state.form.zipCode.touched !== false &&
                  this.state.form.zipCode.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <hr></hr>
              <TextField
                onChange={e => this.inputChangedHandler(e, "phoneNumber")}
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="phoneNumber"
                id="phoneNumber"
                defaultValue={this.props.user.user.phoneNumber}
                error={
                  this.state.form.phoneNumber.touched !== false &&
                  this.state.form.phoneNumber.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!this.state.formIsValid}
            onClick={this.onFormSubmitHandle}
          >
            Update
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserRegister: form => dispatch(actions.registerUser(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoPage);
