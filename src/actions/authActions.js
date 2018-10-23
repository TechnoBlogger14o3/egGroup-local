/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import custom CLasses
import {LOGIN_URL, LOGOUT_URL, REGISTER_URL} from "../constants/url-constants";
import {authenticateUser, handleUserLogout, handleRegisterUser} from "../helpers/authHelpers";

// Handling Register
export const registerUser = payload => (dispatch) => {
    handleRegisterUser(dispatch, payload, REGISTER_URL);
};

// Handling Login
export const loginUser = payload => (dispatch) => {
    authenticateUser(dispatch, payload, LOGIN_URL);
};

// Handling LogOut
export const logoutUser = token => async (dispatch) => {
    handleUserLogout(dispatch, token, LOGOUT_URL);
};
