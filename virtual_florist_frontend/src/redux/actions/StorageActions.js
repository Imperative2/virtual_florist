import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchStorages = () => {
  return dispatch => {
    axios.get("/storage/").then(response => {
      // console.log(response.data);
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
        console.log(res);
      });
  };
};

export const setStorages = storages => {
  return {
    type: actionTypes.SET_STORAGE,
    storages: storages
  };
};
