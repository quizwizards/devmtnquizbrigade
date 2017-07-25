require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = module.exports = express();
const cors = require('cors');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const axios = require('axios');
const massive = require('massive');
const session = require('express-session');
const {
    getJSAll,
    getJSBasic,
    getJSAdvanced,
    getCss,
    getHtml,
    inc,
    dec,
    addAnswer,
    addSession
} = require('./Controllers/apiController.js');

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


massive(process.env.LOCAL_DB).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('\n\n DB connect error >> ', err)
});

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
        let db = app.get('db');
        // console.log(profile.id)
        db.getUserByAuthId([profile.id]).then((response) => {
            user = response[0];
            if (!user) {
                console.log('CREATING USER');
                db.createUserByAuth([profile.id, profile.displayName]).then((user) => {
                    return done(null, user)
                })
            } else {
                console.log('FOUND USER', user);
                return done(null, user)
            }
        }).catch(err => {
            console.log(err)
        });
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        // return done(null, profile);
        // console.log(profile)
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
    var userC = userB;
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

app.post('/api/saveSession', function (req, res, next) {
    let auth0id = req.user.id;
    let quizName = req.body.id;
    let data = req.session.cards;
    let db = app.get('db');
    db.getQuizByUser([auth0id, quizName]).then((response) => {
        let quiz = response[0];
        if (!quiz) {
            console.log('CREATING QUIZ');
            db.createQuiz([auth0id, quizName, data]).then(function (response) {
                res.status(200).send('QUIZ CREATED');
            })
        } else {
            console.log('UPDATING QUIZ');
            db.updateQuiz([data, auth0id, quizName]).then(function (response) {
                console.log('Quiz Updated')
                res.status(200).send('QUIZ UPDATED')
            })
        }
    }).catch(err => {
        console.log(err)
    });
})

app.get('/api/login', passport.authenticate('auth0'));

app.get('/auth/callback',
    passport.authenticate('auth0', {
        successRedirect: '/#/getstarted'
    }),
    function (req, res) {
        res.status(200).send(req.user);
    });

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})