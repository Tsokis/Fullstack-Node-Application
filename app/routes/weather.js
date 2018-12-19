const express = require('express');
const weatherController = express.Router();

weatherController.get('/weather', function (req, res) {
    res.render('pages/weather', {
        pageTitle: 'Check Weather'
    });
});

module.exports = weatherController;