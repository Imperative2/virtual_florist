import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchStorages = () => {
  return dispatch => {
    axios.get("/storage/").then(response => {
      dispatch(setStorages(response.data));
    });
  };
};

export const setStorages = storages => {
  return {
    type: actionTypes.SET_STORAGE,
    storage: storages
  };
};
