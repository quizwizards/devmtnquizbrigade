require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = module.exports = express();
const cors = require('cors');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const axios = require('axios');
const session = require('express-session');
const { getJSAll, getJSBasic, getJSAdvanced, getCss, getHtml, inc, dec, addAnswer } = require('./Controllers/apiController.js');

app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))
app.use(passport.initialize());
app.use(passport.session());

//MIDDLEWARE
const checkAuthed = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (!req.isAuthenticated()) {
        return res.status(401).send();
    } else {
        return res.status(200).send("Authed")

    }
};

passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: '/auth/callback'
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        // return done(null, profile);
        console.log(profile)
        // console.log(req.session)
    }
));

passport.serializeUser(function (userA, done) {
    console.log('serializing', userA);
    var userB = userA;
    //Things you might do here :
    //Serialize just the id, get other information to add to session,
    done(null, userB); //PUTS 'USER' ON THE SESSION
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function (userB, done) {
    var userC = userC;
    //Things you might do here :
    // Query the database with the user id, get other information to put on req.user
    done(null, userC); //PUTS 'USER' ON REQ.USER
});


app.get('/api/checkRestriction', checkAuthed)

app.get('/api/getJSAll', getJSAll);

app.get('/api/getJSBasic', getJSBasic);

app.get('/api/getJSAdvanced', getJSAdvanced);

app.get('/api/getCss', getCss);

app.get('/api/getHtml', getHtml);

app.post('/api/inc', inc);

app.post('/api/dec', dec);

app.post('/api/checkRight', addAnswer)

app.get('/api/login', passport.authenticate('auth0'));

app.get('/auth/callback',
    passport.authenticate('auth0', { successRedirect: '/#/getstarted' }), function (req, res) {
        res.status(200).send(req.user);
    });

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})
