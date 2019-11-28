import * as actionTypes from "./actionTypes";
import axios from "../../axios";

import { store } from "react-notifications-component";

const notificationError = {
  type: "danger",
  title: "Error!",
  message: "Basket",
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

const notificationOk = {
  message: "Product",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

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
    if (newProduct.wikiEntryId !== null && newProduct.wikiEntryId !== "") {
      path = "/product/newProduct?wikiEntryId=" + newProduct.wikiEntryId;
    }

    axios
      .put(path, newProduct)
      .then(res => {
        dispatch(fetchProducts());

        store.addNotification({
          ...notificationOk,
          title: "Product",
          message: "Added product"
        });
        console.log(res.status);
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Product adding"
        });
      });
  };
};

export const deleteProduct = productId => {
  console.log(productId);
  const path = "/product/" + productId;
  return dispatch => {
    axios
      .delete(path)
      .then(res => {
        console.log("Deleted :" + " " + productId + "   " + res.status);
        dispatch(fetchProducts());

        store.addNotification({
          ...notificationOk,
          title: "Product",
          message: "Deleted product"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Product delete"
        });
      });
  };
};

export const updateProduct = product => {
  console.log(product);
  const path = "/product/" + product.productId;

  const productToSent = {
    price: product.price,
    name: product.name,
    latinName: product.latinName,
    description: product.description,
    type: product.type,
    tags: product.tags,
    available: product.available
  };

  let wikiId = null;
  if (product.wikiEntry !== null) {
    wikiId = product.wikiEntry.wikiEntryId;
  }

  return dispatch => {
    axios
      .post(path, productToSent, {
        params: {
          wikiEntryId: wikiId
        }
      })
      .then(res => {
        console.log(res);
        dispatch(fetchProducts());

        store.addNotification({
          ...notificationOk,
          title: "Product",
          message: "Updated product"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Product update"
        });
      });
  };
};

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};
