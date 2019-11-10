import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const uploadFiles = picToUplaod => {
  return dispatch => {
    console.log(picToUplaod);
    axios
      .post("/photo/upload", picToUplaod.formData, {
        params: {
          productId: picToUplaod.productId,
          wikiEntryId: picToUplaod.wikiEntryId,
          type: picToUplaod.type,
          description: picToUplaod.description,
          enabled: picToUplaod.enabled
        }
      })
      .then(response => {
        console.log(response);
      });
  };
};
