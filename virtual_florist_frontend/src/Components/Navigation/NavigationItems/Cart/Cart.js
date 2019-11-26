import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { NavLink } from "react-router-dom";

import * as actions from "../../../../redux/actions/index";
import { connect } from "react-redux";

import styleClass from "./Cart.module.css";

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
    console.log(this.props.basket);
    console.log(this.props.storage);

    if (
      this.props.basket !== null &&
      this.props.basket.basketProducts !== null
    ) {
      const cartProducts = this.props.basket.basketProducts.map(
        (basketProduct, index) => {
          let product = null;
          console.log(basketProduct.product.productId);
          console.log(this.props.storage.storages);

          for (let i = 0; i < this.props.storage.storages.length; i++) {
            if (
              this.props.storage.storages[i].product.productId ==
              basketProduct.product.productId
            ) {
              product = this.props.storage.storages[i].product;
              console.log(product);
              return (
                <NavLink
                  key={index}
                  to={"/shop/" + this.props.storage.storages[i].storageId}
                >
                  <MenuItem onClick={this.handleClose}>
                    {product.name}-{product.latinName} Qt:
                    {basketProduct.quantity}
                  </MenuItem>
                </NavLink>
              );
            }
          }
        }
      );
      return (
        <li className={styleClass.Menu}>
          <div>
            <ShoppingCartIcon
              color="action"
              onClick={event => this.handleClick(event)}
            >
              star
            </ShoppingCartIcon>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorElement}
              keepMounted
              open={Boolean(this.state.anchorElement)}
              onClose={this.handleClose}
            >
              <label>Cart:</label>

              {cartProducts}
              <MenuItem>
                <button>clicasdfasdfaasdfas</button>
              </MenuItem>
            </Menu>
          </div>
        </li>
      );
    } else {
      return (
        <li className={styleClass.Menu}>
          <div>
            <ShoppingCartIcon
              color="action"
              onClick={event => this.handleClick(event)}
            >
              star
            </ShoppingCartIcon>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorElement}
              keepMounted
              open={Boolean(this.state.anchorElement)}
              onClose={this.handleClose}
            >
              <label>Cart:</label>
              <h5>Empty Cart</h5>
            </Menu>
          </div>
        </li>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    basket: state.basket,
    products: state.products,
    storage: state.storages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLogOut: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
