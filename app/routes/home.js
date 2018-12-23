const express = require('express');
const homeController = express.Router();

homeController.get('/', function (req, res) {
    res.render('pages/home', {
        pageTitle: 'Home',
        pageID: 'home'
    });
});

module.exports = homeController;