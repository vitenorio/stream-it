const express = require('express');
const routes = require('./src/routes');

const app = express();

//Permitindo que o express "entenda" o formato JSON.
app.use(express.json());
app.use(routes);

app.listen(3030);