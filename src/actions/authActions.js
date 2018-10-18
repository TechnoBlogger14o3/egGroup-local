import {LOGIN_URL, LOGOUT_URL, REGISTER_URL} from "../constants/url-constants";
import {authenticateUser, handleUserLogout, handleRegisterUser} from "../helpers/authHelpers";

export const registerUser = payload => (dispatch) => {
    handleRegisterUser(dispatch, payload, REGISTER_URL);
};

export const loginUser = payload => (dispatch) => {
    authenticateUser(dispatch, payload, LOGIN_URL);
};

export const logoutUser = token => async (dispatch) => {
    handleUserLogout(dispatch, token, LOGOUT_URL);
};
