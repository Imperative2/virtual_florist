import * as actionTypes from "./actionTypes";
import axios from "../../axios";

import { store } from "react-notifications-component";

const notificationError = {
  type: "danger",
  title: "Error!",
  message: "Wiki",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

const notificationOk = {
  message: "Wiki Entry Added",
  type: "success",
  insert: "top",
  container: "bottom-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
};

export const fetchWikiEntries = () => {
  return dispatch => {
    axios.get("/wiki/").then(response => {
      dispatch(setWikiEntries(response.data));
    });
  };
};

export const addWikiEntry = newWikiEntry => {
  return dispatch => {
    axios
      .put("/wiki/newEntry", newWikiEntry)
      .then(res => {
        dispatch(fetchWikiEntries());

        store.addNotification({
          ...notificationOk,
          title: "Wiki Entry",
          message: "Added"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Wiki Entry adding"
        });
      });
  };
};

export const deleteWikiEntry = wikiEntryId => {
  const path = "/wiki/" + wikiEntryId;
  return dispatch => {
    axios
      .delete(path)
      .then(res => {
        dispatch(fetchWikiEntries());
        store.addNotification({
          ...notificationOk,
          title: "Wiki Entry",
          message: "Deleted"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Wiki Entry deleting"
        });
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
    axios
      .post(path, wikiEntryToSend)
      .then(res => {
        console.log(res);
        dispatch(fetchWikiEntries());

        store.addNotification({
          ...notificationOk,
          title: "Wiki Entry",
          message: "Updated"
        });
      })
      .catch(err => {
        store.addNotification({
          ...notificationError,
          message: "Wiki Entry updating"
        });
      });
  };
};

export const setWikiEntries = entries => {
  return {
    type: actionTypes.SET_WIKI_ENTRIES,
    entries: entries
  };
};
