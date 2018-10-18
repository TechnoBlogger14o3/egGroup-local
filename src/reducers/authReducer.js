import {AUTHENTICATE, LOGOUT, AUTH_ERROR} from "../constants/action-types";

const initialState = {
    user: {},
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case AUTHENTICATE:
          return {
              ...state,
              token: action.token,
              isLoggedin: true
          };

      case LOGOUT:
          return {
              ...state,
              token: "",
              isLoggedin: false
          };

      case AUTH_ERROR:
          return {
            ...state
          };

      default:
        return state;
  }
};
