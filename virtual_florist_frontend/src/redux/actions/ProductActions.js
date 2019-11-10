import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchProducts = () => {
  return dispatch => {
    axios.get("/product/").then(response => {
      console.log(response.data);
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
