import * as actionTypes from "./actionTypes";
import axios from "../../axios";

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
  return dispatch => {
    axios.post();
  };
};

export const sendRemoveItemFromBasket = form => {
  return dispatch => {
    axios.delete();
  };
};

export const removeItemFromBasket = itemId => {
  return {
    type: actionTypes.ADD_ITEM_TO_BASKET,
    itemId: itemId
  };
};

export const addItemToBasket = form => {
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
