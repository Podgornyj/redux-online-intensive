// Core
import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';

// Instruments
import './theme/init';
import { store } from './init/store';
import { history } from "./init/middleware/core";

// Intro
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'));
