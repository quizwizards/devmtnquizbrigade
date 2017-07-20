require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = module.exports = express();
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
const {getJSAll, inc, dec, getJSBasic, incJSBasic, decJSBasic, getJSAdvanced, incJSAdvanced, decJSAdvanced, getCss, incCss, decCss, getHtml, incHtml, decHtml} = require('./Controllers/apiController.js');

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

app.get('/api/getJSBasic', getJSBasic);

app.get('/api/getJSAdvanced', getJSAdvanced);

app.get('/api/getCss', getCss);

app.get('/api/getHtml', getHtml);

app.post('/api/inc', inc);

app.post('/api/dec', dec);

// app.post('/api/incjsbasicdata', incJSBasic);

// app.post('/api/decjsbasicdata', decJSBasic);

// app.post('/api/incjsadvanceddata', incJSAdvanced);

// app.post('/api/decjsadvanceddata', decJSAdvanced);

// app.post('/api/inccssdata', incCss);

// app.post('/api/deccssdata', decCss);

// app.post('/api/inchtmldata', incHtml);

// app.post('/api/dechtmldata', decHtml);



app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})
