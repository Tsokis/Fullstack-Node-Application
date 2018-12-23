var express = require('express');
var tvshowsController = express.Router();

tvshowsController.get('/tvshows', function (req, res) {
    res.render('pages/tvshows', {
        pageTitle: 'Search tv shows',
        'pageID':'tv-shows'
    });

});

module.exports = tvshowsController;