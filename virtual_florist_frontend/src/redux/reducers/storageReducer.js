import * as actionTypes from "../actions/actionTypes";

const initialState = {
  storages: [
    {
      quantity: 0,
      enabled: false,
      product: {
        productId: "0",
        name: "test",
        latin_name: "test",
        description: "test",
        type: "SINGLE",
        tags: "asdfasdf",
        available: true,
        photos: [],
        wikiEntry: null
      }
    }
  ]
};

const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STORAGE: {
      return {
        ...state,
        storage: action.storages
      };
    }
  }

  return state;
};

export default storageReducer;
