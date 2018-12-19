const express = require('express');
const aboutController = express.Router();

aboutController.get('/about', function (req, res) {
    res.render('pages/about', {
         pageTitle: 'About'
    });    
});

module.exports = aboutController;