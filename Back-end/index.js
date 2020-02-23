const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const requireDir = require('require-dir');
const config = require('./src/Utils/config');

const app = express();

mongoose.connect(config.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/Models/');

//Permitindo que o express "entenda" o formato JSON.
app.use(express.json());
app.use(routes);

app.listen(3030);