import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchProducts = () => {
  return dispatch => {
    axios.get("/product/").then(response => {
      dispatch(setProducts(response.data));
    });
  };
};

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};
