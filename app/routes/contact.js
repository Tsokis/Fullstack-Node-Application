const express = require('express');
const contactController = express.Router();

contactController.get('/contact', function (req, res) {
    res.render('pages/contact', {
        pageTitle: 'Contact',
        pageID: 'contact'
    });
});

module.exports = contactController;