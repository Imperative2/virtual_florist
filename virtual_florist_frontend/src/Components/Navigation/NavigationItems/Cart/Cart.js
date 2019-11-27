import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Button from "../../../UI/Button/ButtonGood/ButtonGood";

import { NavLink } from "react-router-dom";

import * as actions from "../../../../redux/actions/index";
import { connect } from "react-redux";

import styleClass from "./Cart.module.css";

class UserMenu extends Component {
  state = {
    anchorElement: null
  };

  componentWillMount() {
    if (this.props.user.user.role !== "GUEST") {
      this.props.onFetchStorage();
      this.props.onFetchBasket(this.props.user.user.userId);
    }
  }

  handleClick = event => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorElement: null });
  };

  render() {
    if (
      this.props.basket !== null &&
      this.props.basket.basketProducts !== null
    ) {
      const cartProducts = this.props.basket.basketProducts.map(
        (basketProduct, index) => {
          let product = null;

          for (let i = 0; i < this.props.storage.storages.length; i++) {
            if (
              this.props.storage.storages[i].product.productId ==
              basketProduct.product.productId
            ) {
              product = this.props.storage.storages[i].product;
              return (
                <NavLink
                  key={index}
                  to={"/shop/" + this.props.storage.storages[i].storageId}
                >
                  <MenuItem onClick={this.handleClose}>
                    {product.name}-{product.latinName} Qt:
                    {basketProduct.quantity} total: $
                    {product.price * basketProduct.quantity}
                  </MenuItem>
                  <hr></hr>
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
              <h1 className={styleClass.Label}>Cart:</h1>
              <hr></hr>

              {cartProducts}
              <MenuItem>
                <NavLink to="/checkout">
                  <Button name="Checkout"></Button>
                </NavLink>
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
              <h1 className={styleClass.Label}>Cart:</h1>
              <hr></hr>
              <h5 className={styleClass.Label}>Empty Cart</h5>
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
    onFetchStorage: () => dispatch(actions.fetchStorages()),
    onFetchBasket: userId => dispatch(actions.fetchBasket(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
