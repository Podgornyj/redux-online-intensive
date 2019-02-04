import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { postsActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* fetchPosts () {
    try {
        const response = yield apply(api, api.posts.fetch);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(post));

    }catch (error) {
        yield put(uiActions.emitError(error, 'fetchPost worker'));
    }
}
