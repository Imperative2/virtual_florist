import * as actionTypes from "../actions/actionTypes";

const initialState = {
  monthlyStatuses: [
    {
      monthlyStatusId: "0",
      date: "1970-11-22",
      income: 0,
      productsSold: 0
    }
  ]
};

const monthlyStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MONTHLY_STATUS: {
      return {
        ...state,
        monthlyStatuses: action.monthlyStatuses
      };
    }
  }
  return state;
};

export default monthlyStatusReducer;
