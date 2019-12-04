import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basketVerified: false,
  orderComplete: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET_VERIFIED: {
      return {
        ...state,
        basketVerified: action.isVerified
      };
    }

    case actionTypes.SET_ORDER_COMPLETE: {
      return {
        ...state,
        orderComplete: action.isComplete
      };
    }
  }
  return state;
};

export default orderReducer;
