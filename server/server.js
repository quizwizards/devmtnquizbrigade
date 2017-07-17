require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = module.exports = express();
const cors = require('cors');
const axios = require('axios')
const {getJSAll, getJSBasic, getJSAdvanced, getCss, getHtml} = require('./Controllers/apiController.js');

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + './../public'));

app.get('/api/getJSAll', getJSAll);

app.get('/api/getJSBasic', getJSAll);

app.get('/api/getJSAdvanced', getJSAll);

app.get('/api/getCss', getCss);

app.get('/api/getHtml', getHtml);



app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})
