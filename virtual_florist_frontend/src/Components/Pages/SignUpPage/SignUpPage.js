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

import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";

class signUp extends Component {
  state = {
    form: {
      firstName: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lastName: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email1: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email2: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password1: {
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      password2: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      phoneNumber: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },

      country: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      city: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        value: "",
        validation: {
          required: true
        },
        valid: false,
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
        valid: false,
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
    const classes = makeStyles(theme => ({
      body: {
        backgroundColor: theme.palette.common.white
      },

      paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
      },
      submit: {
        margin: theme.spacing(3, 0, 2)
      }
    }));

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
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
                label="Email Address"
                name="email"
                type="e-mail"
                autoComplete="email"
                error={
                  this.state.form.email2.touched !== false &&
                  this.state.form.email2.valid === false
                    ? true
                    : false
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={e => this.inputChangedHandler(e, "email2")}
                variant="outlined"
                required
                fullWidth
                id="email2"
                label="Retype email"
                name="email2"
                error={
                  this.state.form.email2.touched !== false &&
                  this.state.form.email2.valid === false
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
                label="Password (min length: 6)"
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
              <TextField
                onChange={e => this.inputChangedHandler(e, "password2")}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Retype password"
                type="password"
                id="password2"
                error={
                  this.state.form.password2.touched !== false &&
                  this.state.form.password2.valid === false
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
                error={
                  this.state.form.phoneNumber.touched !== false &&
                  this.state.form.phoneNumber.valid === false
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!this.state.formIsValid}
            className={classes.submit}
            onClick={this.onFormSubmitHandle}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(signUp);
