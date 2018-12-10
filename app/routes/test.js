const express = require('express');
//const app = express();
const testController = express.Router();

testController.get('/test', function (req, res) {
    res.render('pages/test', {
        pageTitle: 'test'
    });
});

module.exports = testController;