import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: {
    userId: "",
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    businessClient: false,
    adress: {
      adressId: "",
      country: "",
      city: "",
      street: "",
      localNumber: "",
      zipCode: ""
    },
    logged: false,
    role: "ADMIN"
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  }

  return state;
};

export default userReducer;
