const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + './../public'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
