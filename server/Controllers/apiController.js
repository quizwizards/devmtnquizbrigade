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

            res.send(getRandom(data));
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

            res.send(getRandom(data));
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

            res.send(getRandom(data));
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

            res.send(getRandom(data));
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

            res.send(getRandom(data));
        })
    }

}