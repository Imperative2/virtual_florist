import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const registerUser = form => {
  console.log(form);

  return dispatch => {
    axios.put("/user/register", form).then(res => {
      console.log(res);
    });
  };
};

export const login = form => {
  console.log(form);
  return dispatch => {
    let path = "/user/login";
    axios
      .post(path, null, {
        params: {
          email: form.email,
          password: form.password
        }
      })
      .then(res => {
        console.log(res);
        dispatch(setUser(res.data));
      });
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOG_OUT
  };
};

export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    user: user
  };
};

export const logIntoSystem = role => {
  return {
    type: actionTypes.LOGIN_USER,
    role: role
  };
};
