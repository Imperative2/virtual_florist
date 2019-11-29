import * as actionTypes from "./actionTypes";
import axios from "../../axios";

import { store } from "react-notifications-component";

const notificationError = {
  type: "danger",
  title: "Error!",
  message: "Basket",
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
  message: "Basket",
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

export const fetchStorages = () => {
  return dispatch => {
    axios.get("/storage/").then(response => {
      dispatch(setStorages(response.data));
    });
  };
};

export const addNewStorage = storage => {
  console.log(storage);

  const newStorage = {
    quantity: storage.quantity,
    available: storage.available
  };
  return dispatch => {
    axios
      .put("/storage/newStorage", newStorage, {
        params: { productId: storage.selectedProductId }
      })
      .then(res => {
        dispatch(fetchStorages());
        console.log(res);
        store.addNotification({
          ...notificationOk,
          title: "Storage",
          message: "Added storage"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Storage adding"
        });
      });
  };
};

export const updateStorage = storage => {
  console.log(storage);
  const path = "/storage/" + storage.storageId;

  return dispatch => {
    axios
      .post(path, storage)
      .then(res => {
        dispatch(fetchStorages());
        console.log(res);
        store.addNotification({
          ...notificationOk,
          title: "Storage",
          message: "Update storage"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Storage update"
        });
      });
  };
};

export const changeQuantity = form => {
  console.log(form);
  const path = "/storage/" + form.storageId + "/changeQuantity";

  return dispatch => {
    axios
      .post(path, form, {
        params: {
          quantity: form.quantity
        }
      })
      .then(res => {
        dispatch(fetchStorages());
        console.log(res);
        store.addNotification({
          ...notificationOk,
          title: "Storage",
          message: "changed quantity storage"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Storage change quantity"
        });
      });
  };
};

export const deleteStorage = storage => {
  console.log(storage);
  const path = "/storage/" + storage.storageId;

  return dispatch => {
    axios
      .delete(path)
      .then(res => {
        dispatch(fetchStorages());
        console.log(res);
        store.addNotification({
          ...notificationOk,
          title: "Storage",
          message: "Deleted storage"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Storage delete"
        });
      });
  };
};

export const setStorages = storages => {
  return {
    type: actionTypes.SET_STORAGE,
    storages: storages
  };
};
