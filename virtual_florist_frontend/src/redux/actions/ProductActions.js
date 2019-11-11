import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchProducts = () => {
  return dispatch => {
    axios.get("/product/").then(response => {
      dispatch(setProducts(response.data));
    });
  };
};

export const addProduct = newProduct => {
  console.log(newProduct);
  return dispatch => {
    let path = "/product/newProduct";
    if (newProduct.wikiEntryId !== null) {
      path = "/product/newProduct?wikiEntryId=" + newProduct.wikiEntryId;
    }

    axios.put(path, newProduct).then(res => {
      console.log(res.status);
    });
  };
};

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};
