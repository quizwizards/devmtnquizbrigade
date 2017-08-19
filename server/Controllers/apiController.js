const axios = require('axios');
require('dotenv').config();

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

module.exports = {
    getJSAll: function (req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/216066988?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function (resp) {
            let data = resp.data.terms;

            function getRandom(arrObj) {
                let arr = [];
                let finalArrOfObj = [];

                for (let i = 0; i < data.length; i++) {
                    arr.push(i);
                }
                let shuffledArr = shuffle(arr);

                for (let j = 0; j < shuffledArr.length; j++) {
                    finalArrOfObj.push(data[shuffledArr[j]]);
                }
                return finalArrOfObj
            }
            req.session.cards = getRandom(data);
            res.status(200).send({
                firstCard: req.session.cards[0],
                length: req.session.cards.length
            })
        })
    },

    getJSBasic: function (req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/216120524?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function (resp) {
            let data = resp.data.terms;

            function getRandom(arrObj) {
                let arr = [];
                let finalArrOfObj = [];

                for (let i = 0; i < data.length; i++) {
                    arr.push(i);
                }
                let shuffledArr = shuffle(arr);

                for (let j = 0; j < shuffledArr.length; j++) {
                    finalArrOfObj.push(data[shuffledArr[j]]);
                }
                return finalArrOfObj
            }

            req.session.cards = getRandom(data);
            res.status(200).send({
                firstCard: req.session.cards[0],
                length: req.session.cards.length
            })
        })
    },

    getJSAdvanced: function (req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/216121281?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function (resp) {
            let data = resp.data.terms;

            function getRandom(arrObj) {
                let arr = [];
                let finalArrOfObj = [];

                for (let i = 0; i < data.length; i++) {
                    arr.push(i);
                }
                let shuffledArr = shuffle(arr);

                for (let j = 0; j < shuffledArr.length; j++) {
                    finalArrOfObj.push(data[shuffledArr[j]]);
                }
                return finalArrOfObj
            }

            req.session.cards = getRandom(data);
            res.status(200).send({
                firstCard: req.session.cards[0],
                length: req.session.cards.length
            })
        })
    },

    getReact: function (req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/218386881?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function (resp) {
            let data = resp.data.terms;

            function getRandom(arrObj) {
                let arr = [];
                let finalArrOfObj = [];

                for (let i = 0; i < data.length; i++) {
                    arr.push(i);
                }
                let shuffledArr = shuffle(arr);

                for (let j = 0; j < shuffledArr.length; j++) {
                    finalArrOfObj.push(data[shuffledArr[j]]);
                }
                return finalArrOfObj
            }

            req.session.cards = getRandom(data);
            res.status(200).send({
                firstCard: req.session.cards[0],
                length: req.session.cards.length
            })
        })
    },

    getCss: function (req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/216076590?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function (resp) {
            let data = resp.data.terms;

            function getRandom(arrObj) {
                let arr = [];
                let finalArrOfObj = [];

                for (let i = 0; i < data.length; i++) {
                    arr.push(i);
                }
                let shuffledArr = shuffle(arr);

                for (let j = 0; j < shuffledArr.length; j++) {
                    finalArrOfObj.push(data[shuffledArr[j]]);
                }
                return finalArrOfObj
            }

            req.session.cards = getRandom(data);
            res.status(200).send({
                firstCard: req.session.cards[0],
                length: req.session.cards.length
            })
        })
    },

    getHtml: function (req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/216078345?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function (resp) {
            let data = resp.data.terms;

            function getRandom(arrObj) {
                let arr = [];
                let finalArrOfObj = [];

                for (let i = 0; i < data.length; i++) {
                    arr.push(i);
                }
                let shuffledArr = shuffle(arr);

                for (let j = 0; j < shuffledArr.length; j++) {
                    finalArrOfObj.push(data[shuffledArr[j]]);
                }
                return finalArrOfObj
            }

            req.session.cards = getRandom(data);
            res.status(200).send({
                firstCard: req.session.cards[0],
                length: req.session.cards.length
            })
        })
    },

    inc: function (req, res, next) {
        let { count } = req.body
        let intNum = Number(count)
        res.status(200).send(req.session.cards[intNum])
    },

    dec: function (req, res, next) {
        let { count } = req.body;
        let intNum1 = Number(count)
        res.status(200).send(req.session.cards[intNum1])
    },
    addAnswer: function(req, res, next) {
        let { index, right, wrong } = req.body;
        req.session.cards[index].right = right;
        req.session.cards[index].wrong = wrong;
        res.status(200).send('ok');

    },
    addSession: function(req, res, next) {
        let auth0id = req.user.id;
        let quizName = req.body.id;
        let data = req.session.cards;
        app.get('db').createQuiz([auth0id, quizName, data]).then(function(response) {
            res.send('ok');
        })
    }
}