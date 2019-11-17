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
  return dispatch => {
    axios.put("/wiki/newEntry", newWikiEntry).then(res => {
      dispatch(fetchWikiEntries());
    });
  };
};

export const deleteWikiEntry = wikiEntryId => {
  const path = "/wiki/" + wikiEntryId;
  return dispatch => {
    axios.delete(path).then(res => {
      dispatch(fetchWikiEntries());
    });
  };
};

export const setWikiEntries = entries => {
  return {
    type: actionTypes.SET_WIKI_ENTRIES,
    entries: entries
  };
};
