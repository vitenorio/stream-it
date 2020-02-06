const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({message: "Conexão estabelecida!"})
});

app.listen(3030);