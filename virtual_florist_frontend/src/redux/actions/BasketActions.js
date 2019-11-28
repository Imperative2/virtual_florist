import * as actionTypes from "./actionTypes";
import axios from "../../axios";

import { store } from "react-notifications-component";

const notificationError = {
  type: "danger",
  title: "Error!",
  message: "Basket",
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

const notificationOk = {
  message: "Basket",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

export const fetchBasket = userId => {
  return dispatch => {
    axios
      .get("/basket/userBasket", {
        params: {
          userId: userId
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(setBasket(res.data));
        }
      });
  };
};

export const sendItemToBasket = form => {
  const body = {
    quantity: form.quantity,
    product: {
      productId: form.productId
    }
  };
  return dispatch => {
    axios
      .post("/basket/userBasket/newProduct", body, {
        params: {
          userId: form.userId
        }
      })
      .then(res => {
        console.log(res);
        dispatch(fetchBasket(form.userId));
        store.addNotification({
          ...notificationOk,
          title: "Cart",
          message: "Added item"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Cart adding"
        });
      });
  };
};

export const sendRemoveItemFromBasket = form => {
  const body = {
    quantity: form.quantity,
    product: {
      productId: form.productId
    }
  };
  return dispatch => {
    axios
      .post("/basket/userBasket/deleteProduct", body, {
        params: {
          userId: form.userId
        }
      })
      .then(res => {
        console.log(res);
        dispatch(fetchBasket(form.userId));

        store.addNotification({
          ...notificationOk,
          title: "Cart",
          message: "Removed item"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Cart removing"
        });
      });
  };
};

export const removeItemFromBasket = form => {
  store.addNotification({
    ...notificationOk,
    title: "Cart",
    message: "Removed item"
  });
  return {
    type: actionTypes.REMOVE_ITEM_FROM_BASKET,
    form: form
  };
};

export const addItemToBasket = form => {
  store.addNotification({
    ...notificationOk,
    title: "Cart",
    message: "Added item"
  });
  return {
    type: actionTypes.ADD_ITEM_TO_BASKET,
    form: form
  };
};

export const setBasket = basket => {
  return {
    type: actionTypes.SET_BASKET,
    basket: basket
  };
};

export const clearBasket = () => {
  return {
    type: actionTypes.CLEAR_BASKET
  };
};
