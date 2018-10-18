import {redirectTo} from "./index";

export const handleRegisterUser = async (dispatch, payload, url) => {
    try {
        const response = await api(url, "POST", payload);
        if (response.status === 200) {
            const user = await response.json();
            if (user) {
                dispatch({
                    type: AUTHENTICATE
                });
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
        if (response.status === 200) {
            const user = await response.json();
            if (user) {
                dispatch({
                    type: AUTHENTICATE
                });
                redirectTo("app");
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

export const handleUserLogout = (dispatch, payload, url) => {

}
