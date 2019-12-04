import * as actionTypes from "./actionTypes";
import axios from "../../axios";

import { store } from "react-notifications-component";

const notificationError = {
  type: "danger",
  title: "Error!",
  message: "Order",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

const notificationOk = {
  message: "Order",
  type: "success",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

export const verifyBasket = form => {
  console.log(form);
  return dispatch => {
    let path = "/order/verifyBasket";
    axios
      .post(path, form)
      .then(res => {
        console.log(res);
        dispatch(setBasketVerified(true));

        store.addNotification({
          ...notificationOk,
          title: "Order",
          message: "Products verified"
        });
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch(setBasketVerified(false));

        store.addNotification({
          ...notificationError,
          message: err.response.data
        });
      });
  };
};

export const setBasketVerified = isVerified => {
  return {
    type: actionTypes.SET_BASKET_VERIFIED,
    isVerified: isVerified
  };
};
