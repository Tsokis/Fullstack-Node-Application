const express = require('express');
const chatController = express.Router();

chatController.get('/chat', function (req, res) {
    res.render('pages/chat', {
        pageTitle: 'Chat Mate',
        pageID: 'chat'
    });
});

module.exports = chatController;