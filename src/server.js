import path from 'path';
import express from 'express';
import webpack from 'webpack';

import handleRender from './lib/render';
import {
    prepareState
} from './middlewares';

import {
    mainController
} from './controllers';

const app = express();

app.set('views', './src/layouts');
app.set('view engine', 'hbs');

app.use('/dist', express.static('dist', {
    fallthrough: false
}));

app.use(prepareState);
app.get('/', mainController);

app.use(handleRender);

app.listen(8080, function () {
    console.log('Example app listening on port http://localhost:8080!\n');
});
