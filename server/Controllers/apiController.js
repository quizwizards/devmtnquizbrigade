const axios = require('axios');
require('dotenv').config();

module.exports = {
    getJSAll: function(req, res, next) {
        axios({
            url: `https://api.quizlet.com/2.0/sets/181972820?client_id=${process.env.QUIZLET_KEY}&whitespace=1`,
            method: 'GET'
        }).then(function(resp) {

            res.send(resp.data);
        })
    }
}