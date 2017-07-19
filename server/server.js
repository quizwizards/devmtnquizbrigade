require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = module.exports = express();
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
const {getJSAll, incJSAll, decJSAll, getJSBasic, incJSBasic, decJSBasic, getJSAdvanced, incJSAdvanced, decJSAdvanced, getCss, incCss, decCss, getHtml, incHtml, decHtml} = require('./Controllers/apiController.js');

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))


app.use(express.static(__dirname + './../public'));


app.get('/api/getJSAll', getJSAll);

app.post('/api/incjsalldata', incJSAll);

app.post('/api/decjsalldata', decJSAll);

app.get('/api/getJSBasic', getJSBasic);

app.post('/api/incjsbasicdata', incJSBasic);

app.post('/api/decjsbasicdata', decJSBasic);

app.get('/api/getJSAdvanced', getJSAdvanced);

app.post('/api/incjsadvanceddata', incJSAdvanced);

app.post('/api/decjsadvanceddata', decJSAdvanced);

app.get('/api/getCss', getCss);

app.post('/api/inccssdata', incCss);

app.post('/api/deccssdata', decCss);

app.get('/api/getHtml', getHtml);

app.post('/api/inchtmldata', incHtml);

app.post('/api/dechtmldata', decHtml);



app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})
