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
      });
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

export const clearBasket = () => {
  return {
    type: actionTypes.CLEAR_BASKET
  };
};
