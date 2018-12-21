const express = require('express');
const apiController = express.Router();
const Comments = require('../models/Comments');
const bodyParser = require('body-parser')

apiController.use(bodyParser.json());
apiController.use(bodyParser.urlencoded({
    extended: true
}));

apiController.get('/api', (req, res) => {
     Comments.find({}, (err, Comments) => {
     res.json(Comments);
     });
});

apiController.post('/api', (req, res) => {
            let comment = new Comments(req.body);
            comment.save();
            res.status(201).send(comment);        
});
module.exports = apiController;