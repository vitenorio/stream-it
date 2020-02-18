const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const requireDir = require('require-dir');

const UserName = require('./src/UserName')
const Password = require('./src/Password');

const app = express();

mongoose.connect(`mongodb+srv://${UserName}:${Password}@cluster0-e6zxv.mongodb.net/StreamIt?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/Models/');


//Permitindo que o express "entenda" o formato JSON.
app.use(express.json());
app.use(routes);

app.listen(3030);