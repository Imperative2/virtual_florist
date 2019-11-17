import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchStorages = () => {
  return dispatch => {
    axios.get("/storage/").then(response => {
      console.log(response.data);
      dispatch(setStorages(response.data));
    });
  };
};

export const setStorages = storages => {
  return {
    type: actionTypes.SET_STORAGE,
    storages: storages
  };
};
