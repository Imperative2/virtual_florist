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
    role: "GUEST"
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: {
      return {
        ...state,
        user: action.user
      };
    }
    case actionTypes.LOGIN_USER: {
      return {
        ...state,
        user: { logged: true }
      };
    }

    case actionTypes.LOG_OUT: {
      return {
        ...state,
        user: { ...initialState.user, logged: false, role: "GUEST" }
      };
    }
  }

  return state;
};

export default userReducer;
