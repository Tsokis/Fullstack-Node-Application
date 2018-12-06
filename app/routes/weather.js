var express = require('express');
var app = express();
var weatherController = express.Router();

weatherController.get('/weather', function (req, res) {
    res.render('pages/weather', {
        pageTitle: 'Check Weather'
    });
});

module.exports = weatherController;