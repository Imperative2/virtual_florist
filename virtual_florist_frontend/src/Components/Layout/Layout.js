import React, { Component } from "react";
import Aux from "../hoc/AUXX/Auxiliary";
import styleClasses from "../Layout/Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
import TopLogo from "../Pages/MainPage/TopLogo/topLogo";

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
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        ></SideDrawer>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styleClasses.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
