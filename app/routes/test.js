const express = require('express');
const testController = express.Router();


testController.get('/test', function (req, res) {        
    res.render('pages/test', {
        pageTitle: 'test', 
        'pageID':'test'       
    });
});

module.exports = testController;