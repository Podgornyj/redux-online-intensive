import { types } from "./types";

export const userActions = {
    clearUsers: () => {
        return {
            type: types.CLEAR_USERS,
        };
    },
    fillUsers: (users) => {
        return {
            type: types.FILL_USERS,
            payload: users,
        };
    },
    fetchUsersAsync: () => {
        return {
            type: types.FETCH_USERS_ASYNC,
        };
    },
};
