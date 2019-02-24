import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";
import { authActions } from "../../../auth/actions";
import { profileActions } from "../../../profile/actions";
import { actions } from "react-redux-form";

export function* login ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.login, [userInfo]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

        if (userInfo.remember) {
            yield apply(localStorage, localStorage.setItem, ['remember', true]);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        yield put(authActions.authenticate());

    } catch (error) {
        yield put(uiActions.emitError(error, 'login worker'));
    } finally {
        yield put(uiActions.stoptFetching());
    }
}
