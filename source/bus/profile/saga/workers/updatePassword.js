import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";

export function* updatePassword ({ payload: {
    oldPassword, newPassword,
}}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.profile.updateProfile, [{
            oldPassword, newPassword,
        }]);
        const { message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        //Не придумал что тут сделать дальше или редиректить куда-то
        //или диспатчить экшен fillProfile т.к. приходит информация о профиле после успешного изменения пароля
        //неплохобы наверное после сабмита почистить форму но как это с формиком сделать не знаю
        //Переделывать на редакс форм тоже нет смысла так как эту информацию не нужно хранить и она по сути нужна один раз
    } catch (error) {
        yield put(uiActions.emitError(error, 'updatePassword worker'));
    } finally {
        yield put(uiActions.stoptFetching());
    }
}
