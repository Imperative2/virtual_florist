import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchWikiEntries = () => {
  return dispatch => {
    axios.get("/wiki/").then(response => {
      dispatch(setWikiEntries(response.data));
    });
  };
};

export const setWikiEntries = entries => {
  return {
    type: actionTypes.SET_WIKI_ENTRIES,
    entries: entries
  };
};
