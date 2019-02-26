import { usersReducer } from './reducer';
import { userActions } from './actions';
import { types } from "./types";
import { List, fromJS } from "immutable";

const initialState = List();

describe('Users reducer:', () => {
    test('should return initial state by default', () => {
        expect(usersReducer(void 0, { type: '@@INIT' })).toEqual(
            initialState,
        );
    });
    test('should handle fillUsers action creator', () => {
        expect(
            usersReducer(initialState,
                userActions.fillUsers(__.users)),
        ).toEqual(fromJS(__.users));
    });
    test('should handle clearUsers action creator', () => {
        expect(
            usersReducer(initialState,
                userActions.clearUsers()),
        ).toEqual(
            initialState
        );
    });
});
