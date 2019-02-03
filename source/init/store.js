import { createStore } from 'redux';

import { rootSaga } from './rootSaga';

import { rootReducer } from './rootReducer';

import { enhancedStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
