import { types } from "./types";

export const authActions = {
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    signupAsync: (userData) => {
        return {
            type: types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    loginAsync: (userData) => {
        return {
            type: types.LOGIN_ASYNC,
            payload: userData,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
};
