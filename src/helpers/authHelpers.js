import {redirectTo, navigateTo} from "./index";
import {AUTHENTICATE, AUTH_ERROR, LOGOUT} from "../constants/action-types";
import api from "../services/appService";

export const handleRegisterUser = async (dispatch, payload, url) => {
    try {
      console.log(payload);
        const response = await api(url, "POST", payload);
        console.log(response);
        if (response.status === 200) {
            const user = await response.json();
            if (user) {
                navigateTo("login");
                alert('Thank you for signing up. You will receive an email shortly with a link to confirm your email address');
            } else {
                throw new Error("Error. Please try again");
            }
        } else {
            throw new Error("Invalid User");
        }
    } catch (e) {
        console.log(e);
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const authenticateUser = async (dispatch, payload, url) => {
    try {
        const response = await api(url, "POST", payload);
        if (response.status === 200 && response.headers.get("authorization")) {
          console.log(response);
              const token = response.headers.get("authorization");
              console.log(token);

              dispatch({
                  type: AUTHENTICATE,
                  token
              });
              redirectTo("app");
        } else {
            throw new Error("Invalid User");
        }
    } catch (e) {
        console.log(e);
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const handleUserLogout = (dispatch, payload, url) => {
    dispatch({
        type: LOGOUT
    });
    redirectTo("auth");
}
