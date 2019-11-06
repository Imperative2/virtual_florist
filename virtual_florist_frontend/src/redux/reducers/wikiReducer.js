import * as actionTypes from "../actions/actionTypes";
import noImg from "../../Assets/noImage.png";

const initialState = {
  wikiEntries: [
    {
      wikiEntryId: 0,
      name: "asas",
      latinName: "asdasdasd",
      shortDescription: "asdfasdf",
      longDescription: "sdfg",
      treatment: "asdfasdf",
      tips: "asdfasdf",
      tags: "asdfasdf",
      photos: {
        photoId: 0,
        productId: null,
        wikiEntryId: 1,
        type: "SIDE",
        description: "asdsdf",
        path: noImg,
        enabled: true
      }
    }
  ]
};

const wikiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WIKI_ENTRIES: {
      return {
        ...state,
        wikiEntries: action.entries
      };
    }
  }

  return state;
};

export default wikiReducer;
