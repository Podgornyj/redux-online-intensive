import { userActions } from './actions';
import { types } from "./types";

test('Test clearUsers action', () => {
    expect(userActions.clearUsers()).toEqual({
        type: types.CLEAR_USERS,
    });
});

test('Test fillUsers action', () => {
    expect(userActions.fillUsers(__.users)).toEqual({
        type:    types.FILL_USERS,
        payload: __.users,
    });
});

test('Test fetchUsersAsync action', () => {
    expect(userActions.fetchUsersAsync()).toEqual({
        type: types.FETCH_USERS_ASYNC,
    });
});
