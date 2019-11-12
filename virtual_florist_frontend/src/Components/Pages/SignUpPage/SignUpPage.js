import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
          required: true
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
          required: true
        },
        valid: false,
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
    console.log(updatedFormElement);
    let formIsValid = true;
    for (let inputIdentifiers in updatedForm) {
      formIsValid = updatedForm[inputIdentifiers].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
    console.log(this.state);
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
          <form className={classes.form} noValidate>
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
                  autoComplete="email"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "password1")}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={e => this.inputChangedHandler(e, "localNumber")}
                  variant="outlined"
                  required
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!this.props.formIsValid}
              className={classes.submit}
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
          </form>
        </div>
      </Container>
    );
  }
}

export default signUp;
