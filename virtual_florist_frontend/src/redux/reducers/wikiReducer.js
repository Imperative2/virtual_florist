import * as actionTypes from "../actions/actionTypes";

const initialState = {
  wikiEntries: [
    {
      wikiEntryId: 1,
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
        type: "MAIN",
        description: "asdsdf",
        path: "..",
        enabled: true
      }
    }
  ]
};

const wikiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WIKI_ENTRIES: {
      console.log(action.entries);
      return {
        ...state,
        wikiEntries: action.entries
      };
    }
  }

  return state;
};

export default wikiReducer;
