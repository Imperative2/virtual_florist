import React, { Component } from "react";
import Aux from "../hoc/AUXX/Auxiliary";
import styleClasses from "../Layout/Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
import Footer from "../UI/Footer/Footer";

import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          role={this.props.user.user.role}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        ></Toolbar>
        <SideDrawer
          role={this.props.user.user.role}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        ></SideDrawer>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styleClasses.Content}>{this.props.children}</main>
        <Footer></Footer>
      </Aux>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
