import * as actionTypes from "./actionTypes";
import axios from "../../axios";

import * as actions from "./index";

import { store } from "react-notifications-component";
import { createUnionTypeAnnotation } from "@babel/types";

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

export const makeOrderWithAccount = form => {
  console.log(form);

  const request = {
    userId: form.userId,
    deliveryDate: form.deliveryDate,
    comment: form.comment,
    deliveryId: form.deliveryId,
    orderProducts: form.orderedProducts,
    deliveryDetails: {
      country: form.country,
      city: form.city,
      street: form.street,
      localNumber: form.localNumber,
      zipCode: form.zipCode
    }
  };

  console.log(request);

  return dispatch => {
    axios
      .post("/order/submitWithAccount", request)
      .then(res => {
        console.log(res);

        dispatch(actions.clearBasket());
        dispatch(setOrderComplete(true));

        store.addNotification({
          ...notificationOk,
          title: "Order",
          message: "Transaction complete"
        });
      })
      .catch(err => {
        console.log(err.response.data);
        store.addNotification({
          ...notificationError,
          message: err.response.data
        });
      });
  };
};

export const makeOrderWithoutAccount = form => {
  console.log(form);

  const request = {
    userId: form.userId,
    deliveryDate: form.deliveryDate,
    comment: form.comment,
    deliveryId: form.deliveryId,
    orderProducts: form.orderedProducts,
    deliveryDetails: {
      country: form.country,
      city: form.city,
      street: form.street,
      localNumber: form.localNumber,
      zipCode: form.zipCode
    },
    userRegisterData: {
      name: form.name,
      surname: form.surname,
      phoneNumber: form.phoneNumber,
      email: form.email,
      country: form.userCountry,
      city: form.userCity,
      street: form.userStreet,
      localNumber: form.userLocalNumber,
      zipCode: form.userZipCode
    }
  };

  console.log(request);

  return dispatch => {
    axios
      .post("/order/submitWithoutAccount", request)
      .then(res => {
        console.log(res);

        dispatch(actions.clearBasket());
        dispatch(setOrderComplete(true));

        store.addNotification({
          ...notificationOk,
          title: "Order",
          message: "Transaction complete"
        });
      })
      .catch(err => {
        console.log(err.response.data);
        store.addNotification({
          ...notificationError,
          message: err.response.data
        });
      });
  };
};

export const fetchUserOrders = userId => {
  return dispatch => {
    axios
      .get("/order/user/", null, {
        params: {
          userId: userId
        }
      })
      .then(response => {
        dispatch(setOrders(response.data));
      });
  };
};

export const fetchAllOrders = () => {
  return dispatch => {
    axios.get("/order/").then(response => {
      dispatch(setOrders(response.data));
    });
  };
};

export const setOrders = orders => {
  return {
    type: actionTypes.SET_ORDERS,
    orders: orders
  };
};

export const setOrderComplete = isComplete => {
  return {
    type: actionTypes.SET_ORDER_COMPLETE,
    isComplete: isComplete
  };
};

export const setBasketVerified = isVerified => {
  return {
    type: actionTypes.SET_BASKET_VERIFIED,
    isVerified: isVerified
  };
};
