import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import ProductCard from "../../Components/Products/ProductCard/ProductCard";

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

export const deleteProduct = productId => {
  console.log(productId);
  const path = "/product/" + productId;
  return dispatch => {
    axios.delete(path).then(res => {
      console.log("Deleted :" + " " + productId + "   " + res.status);
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

  return dispatch => {
    axios
      .post(path, productToSent, {
        params: {
          wikiEntryId: product.wikiEntry.wikiEntryId
        }
      })
      .then(res => {
        console.log(res);
      });
  };
};

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  };
};
