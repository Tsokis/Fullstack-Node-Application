var express = require('express');
var app = express();
var testController = express.Router();

app.get('/about', function (req, res) {
    res.render('app/views/about');
});