import { applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";

const logger = createLogger({
    duration: true,
    collapse: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#a4319f',
        error: () => '#ff0005',
    }
});

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true });
const composeEnhancers = __DEV__ && devtools? devtools : compose;

const middleware = [sagaMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
