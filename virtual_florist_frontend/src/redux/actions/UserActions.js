import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { fetchBasket } from "./BasketActions";

import { store } from "react-notifications-component";

const notificationError = {
  type: "danger",
  title: "Error!",
  message: "User",
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
  message: "User",
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

export const registerUser = form => {
  console.log(form);

  return dispatch => {
    axios
      .put("/user/register", form)
      .then(res => {
        console.log(res);
        store.addNotification({
          ...notificationOk,
          title: "User",
          message: "Created account successfully"
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

export const login = form => {
  console.log(form);
  return dispatch => {
    let path = "/user/login";
    axios
      .post(path, null, {
        params: {
          email: form.email,
          password: form.password
        }
      })
      .then(res => {
        console.log(res);
        dispatch(fetchBasket(res.data.userId));
        dispatch(setUser(res.data));

        store.addNotification({
          ...notificationOk,
          title: "User",
          message: "Logged successfully"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Logged unsuccessfully"
        });
      });
  };
};

export const updateUser = form => {
  console.log(form.userId);
  console.log(form);
  return dispatch => {
    axios
      .post("/user/updateUser", form, { params: { userId: form.userId } })
      .then(res => {
        console.log(res);
        dispatch(logout());

        store.addNotification({
          ...notificationOk,
          title: "User",
          message: "Updated successfully"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Updated unsuccessfully"
        });
      });
  };
};

export const logout = () => {
  store.addNotification({
    ...notificationOk,
    title: "User",
    message: "Logged Out"
  });
  return {
    type: actionTypes.LOG_OUT
  };
};

export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    user: user
  };
};

export const logIntoSystem = role => {
  return {
    type: actionTypes.LOGIN_USER,
    role: role
  };
};
