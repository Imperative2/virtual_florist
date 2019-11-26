import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basketId: 0,
  valid: false,
  basketProducts: [
    {
      basketProductsId: 0,
      quantity: 0,
      product: {
        productId: 1
      }
    }
  ]
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
  }

  return state;
};

export default basketReducer;
