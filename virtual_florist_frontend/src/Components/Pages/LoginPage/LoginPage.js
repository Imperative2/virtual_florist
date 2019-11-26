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
import Container from "@material-ui/core/Container";

import { NavLink } from "react-router-dom";

import styleClass from "./LoginPage.module.css";

import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    buttonEnabled: false
  };

  onEmailChangeHandler = event => {
    this.setState({ email: event.target.value });
    if (this.state.password !== "" && event.target.value !== "")
      this.setState({ buttonEnabled: true });
    else this.setState({ buttonEnabled: false });
  };

  onPasswordChangeHandler = event => {
    this.setState({ password: event.target.value });
    if (this.state.email !== "" && event.target.value !== "")
      this.setState({ buttonEnabled: true });
    else this.setState({ buttonEnabled: false });
  };

  onButtonClicked = () => {
    const form = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.onUserLogin(form);
    this.props.history.push("/mainPage");
  };

  render() {
    {
      return (
        <div className={styleClass.All}>
          <Container component="main" maxWidth="xs">
            <div>
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={event => this.onEmailChangeHandler(event)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={event => this.onPasswordChangeHandler(event)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!this.state.buttonEnabled}
                onClick={this.onButtonClicked}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to={"/signUp"} exact>
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLogin: form => dispatch(actions.login(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
