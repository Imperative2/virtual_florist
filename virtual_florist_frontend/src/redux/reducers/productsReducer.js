import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [
    {
      productId: "1",
      name: "test",
      latin_name: "test",
      description: "test",
      type: "SINGLE",
      tags: "asdfasdf",
      available: true,
      photos: [],
      wikiEntry: null
    }
  ]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS: {
      return {
        ...state,
        products: action.products
      };
    }
  }

  return state;
};

export default productsReducer;
