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
    }
    
    // incJSBasic: function (req, res, next) {
    //     let { count } = req.body
    //     let intNum2 = Number(count);
    //     res.status(200).send(req.session.jsBasicData[intNum2])
    // },
    // decJSBasic: function (req, res, next) {
    //     let { count } = req.body;
    //     console.log(count)
    //     let intNum3 = Number(count)
    //     res.status(200).send(req.session.jsBasicData[intNum3])
    // },    
    
    // incJSAdvanced: function (req, res, next) {
    //     let { count } = req.body
    //     let intNum4 = Number(count)
    //     res.status(200).send(req.session.jsAdvancedData[intNum4])
    // },
    // decJSAdvanced: function (req, res, next) {
    //     let { count } = req.body;
    //     let intNum5 = Number(count)
    //     res.status(200).send(req.session.jsAdvancedData[intNum5])
    // },    
    
    // incCss: function (req, res, next) {
    //     let { count } = req.body
    //     let intNum6 = Number(count)
    //     res.status(200).send(req.session.cssData[intNum6])
    // },
    // decCss: function (req, res, next) {
    //     let { count } = req.body;
    //     let intNum7 = Number(count)
    //     res.status(200).send(req.session.cssData[intNum7])
    // },      
    
    // incHtml: function (req, res, next) {
    //     let { count } = req.body
    //     let intNum8 = Number(count)
    //     res.status(200).send(req.session.htmlData[intNum8])
    // },
    // decHtml: function (req, res, next) {
    //     let { count } = req.body;
    //     let intNum9 = Number(count)
    //     res.status(200).send(req.session.htmlData[intNum9])
    // }

}