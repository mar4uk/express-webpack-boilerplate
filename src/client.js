import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// // const {createStore, applyMiddleware} = require('redux');
// // const {Provider} = require('react-redux');
// // const chartApp = require('../reducers');
// // const thunk = require('redux-thunk').default;

// // const initialState = JSON.parse(unescape(window.__INITIAL_STATE__));
// // delete window.__INITIAL_STATE__;

// // const store = createStore(chartApp, initialState, applyMiddleware(thunk));

ReactDOM.hydrate(
    <App />
, document.getElementById('app-container'));
