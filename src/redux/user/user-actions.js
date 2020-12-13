import * as actionTypes from "./user-types";

export const authorizeUser = (name, password) => {
    return {
        type: actionTypes.AUTH,
        user: name,
        password
    }
}

export const logout = () => {
    // console.log("logout")
    return {
        type: actionTypes.LOGOUT,
    }
}
