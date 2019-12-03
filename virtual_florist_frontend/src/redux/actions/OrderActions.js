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
        dispatch(setVerified(true));
      })
      .catch(err => {
        //   store.addNotification({
        //     ...notificationError,
        //     message: "Logged unsuccessfully"
        //   });

        console.log(err.response.data);
        dispatch(setVerified(false));

        store.addNotification({
          ...notificationError,
          message: err.response.data
        });
      });
  };
};

export const setVerified = isVerified => {
  return {
    type: actionTypes.SET_BASKET_VERIFIED,
    isVerified: isVerified
  };
};
