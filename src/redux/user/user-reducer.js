import * as actionTypes from "./user-types";

const userInitState = {
    user: "Jo",
    password: "pw123",
    isAuth: false
}

const userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            if (state.state === action.state && state.password === action.password) {
                return { ...state, isAuth: !state.isAuth };
            }
            else {
                return { ...state, isAuth: state.isAuth };
            }

        case actionTypes.LOGOUT:
            return { isAuth: false };

        default:
            return state;
    }
}

export default userReducer;
