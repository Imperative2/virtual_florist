import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basketVerified: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET_VERIFIED: {
      return {
        ...state,
        basketVerified: action.isVerified
      };
    }
  }
  return state;
};

export default orderReducer;
