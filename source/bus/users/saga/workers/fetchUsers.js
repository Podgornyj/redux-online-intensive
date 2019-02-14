import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";
import { userActions } from "../../actions";

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.users);
        const { data: users, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(userActions.fillUsers(users));

    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchUsers worker'));
    } finally {
        yield put(uiActions.stoptFetching());
    }
}
