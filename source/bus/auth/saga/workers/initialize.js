import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";
import { authActions } from "../../../auth/actions";
import { profileActions } from "../../../profile/actions";

export function* initialize () {
    const token = yield apply(localStorage, localStorage.getItem, ['token']);
    const remember = yield apply(localStorage, localStorage.getItem, ['remember']);

    if (token && remember) {
        yield put(authActions.authenticateAsync());
    } else {
        yield put(authActions.initialize());
    }
};
