import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchMonthlyStatus = () => {
  return dispatch => {
    axios.get("/monthlyStatus/").then(response => {
      dispatch(setMonthlyStatus(response.data));
    });
  };
};

export const setMonthlyStatus = monthlyStatuses => {
  return {
    type: actionTypes.SET_MONTHLY_STATUS,
    monthlyStatuses: monthlyStatuses
  };
};
