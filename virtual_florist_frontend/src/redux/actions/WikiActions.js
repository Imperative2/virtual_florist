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

export const updateWikiEntry = wikiEntry => {
  console.log(wikiEntry);
  const path = "/wiki/" + wikiEntry.wikiEntryId;

  const wikiEntryToSend = {
    name: wikiEntry.name,
    latinName: wikiEntry.latinName,
    shortDescription: wikiEntry.shortDescription,
    longDescription: wikiEntry.longDescription,
    treatment: wikiEntry.treatment,
    tips: wikiEntry.tips,
    tags: wikiEntry.tags
  };

  return dispatch => {
    axios.post(path, wikiEntryToSend).then(res => {
      console.log(res);
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
