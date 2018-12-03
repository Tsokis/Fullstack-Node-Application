const express = require('express');
//const app = express();
const homeController = express.Router();

homeController.get('/', function (req, res) {
    res.render('pages/home');
});

module.exports = homeController;