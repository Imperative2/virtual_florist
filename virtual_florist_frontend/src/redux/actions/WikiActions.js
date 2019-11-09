import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchWikiEntries = () => {
  return dispatch => {
    axios.get("/wiki/").then(response => {
      dispatch(setWikiEntries(response.data));
    });
  };
};

export const addWikiEntry = newWikiEntry => {
  console.log(newWikiEntry);
  return dispatch => {
    axios.put("/wiki/newEntry", newWikiEntry).then(res => {
      console.log(res.status);
    });
  };
};

export const setWikiEntries = entries => {
  return {
    type: actionTypes.SET_WIKI_ENTRIES,
    entries: entries
  };
};
