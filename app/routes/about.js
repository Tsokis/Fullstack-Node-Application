const express = require('express');
const aboutController = express.Router();

aboutController.get('/about', function (req, res) {
    let blog={test:"ahhahaha"};
    res.render('pages/about', {
         pageTitle: 'About',
         post:blog
    });
});

module.exports = aboutController;