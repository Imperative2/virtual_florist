import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchStorages = () => {
  return dispatch => {
    axios.get("/storage/").then(response => {
      // console.log(response.data);
      dispatch(setStorages(response.data));
    });
  };
};

export const addNewStorage = storage => {
  console.log(storage);

  const newStorage = {
    quantity: storage.quantity,
    available: storage.available
  };
  return dispatch => {
    axios
      .put("/storage/newStorage", newStorage, {
        params: { productId: storage.selectedProductId }
      })
      .then(res => {
        dispatch(fetchStorages());
        console.log(res);
      });
  };
};

export const updateStorage = storage => {
  console.log(storage);
  const path = "/storage/" + storage.storageId;

  return dispatch => {
    axios.post(path, storage).then(res => {
      dispatch(fetchStorages());
      console.log(res);
    });
  };
};

export const changeQuantity = form => {
  console.log(form);
  const path = "/storage/" + form.storageId + "/changeQuantity";

  return dispatch => {
    axios
      .post(path, form, {
        params: {
          quantity: form.quantity
        }
      })
      .then(res => {
        dispatch(fetchStorages());
        console.log(res);
      });
  };
};

export const deleteStorage = storage => {
  console.log(storage);
  const path = "/storage/" + storage.storageId;

  return dispatch => {
    axios.delete(path).then(res => {
      dispatch(fetchStorages());
      console.log(res);
    });
  };
};

export const setStorages = storages => {
  return {
    type: actionTypes.SET_STORAGE,
    storages: storages
  };
};
