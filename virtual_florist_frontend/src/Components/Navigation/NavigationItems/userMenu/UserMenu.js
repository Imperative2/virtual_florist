import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from "@material-ui/icons/Person";

import { NavLink } from "react-router-dom";

import * as actions from "../../../../redux/actions/index";
import { connect } from "react-redux";

import styleClass from "./UserMenu.module.css";

class UserMenu extends Component {
  state = {
    anchorElement: null
  };

  handleClick = event => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorElement: null });
  };

  handleLogOut = () => {
    this.setState({ anchorElement: null });
    this.props.onUserLogOut();
    console.log(this.props.user);
  };

  render() {
    return (
      <li className={styleClass.Menu}>
        <div>
          <PersonIcon color="action" onClick={event => this.handleClick(event)}>
            star
          </PersonIcon>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorElement}
            keepMounted
            open={Boolean(this.state.anchorElement)}
            onClose={this.handleClose}
          >
            <NavLink to={"/user/userInfo"}>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </NavLink>
            <NavLink to={"/user/history"}>
              <MenuItem onClick={this.handleClose}>History</MenuItem>
            </NavLink>

            <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
          </Menu>
        </div>
      </li>
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
    onUserLogOut: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
