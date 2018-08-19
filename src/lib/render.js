import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'src/components/app';

// const {createStore, applyMiddleware} = require('redux');
// const {Provider} = require('react-redux');
// const chartApp = require('../reducers');
// const thunk = require('redux-thunk').default;

function handleRender(req, res) {
    if (req.xhr) {
        return;
    }

    // const store = createStore(chartApp, applyMiddleware(thunk));

    const content = ReactDOMServer.renderToString(<App />);

    res.render('index.hbs', {
        content
    });
}

export default handleRender;
