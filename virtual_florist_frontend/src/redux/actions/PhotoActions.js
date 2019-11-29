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

export const uploadFiles = picToUplaod => {
  return dispatch => {
    console.log(picToUplaod);
    axios
      .post("/photo/upload", picToUplaod.formData, {
        params: {
          productId: picToUplaod.productId,
          wikiEntryId: picToUplaod.wikiEntryId,
          type: picToUplaod.type,
          description: picToUplaod.description,
          enabled: picToUplaod.enabled
        }
      })
      .then(response => {
        store.addNotification({
          ...notificationOk,
          title: "Photo",
          message: "Added photo"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Photo adding"
        });
      });
  };
};
