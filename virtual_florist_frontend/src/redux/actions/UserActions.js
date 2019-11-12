import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const registerUser = form => {
  console.log(form);

  return dispatch => {
    axios.put("/user/register", form).then(res => {
      console.log(res);
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
