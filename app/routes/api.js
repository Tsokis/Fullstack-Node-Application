const express = require('express');
const apiController = express.Router();
const Comments = require('../models/Comments');
const bodyParser = require('body-parser')

apiController.use(bodyParser.json());
apiController.use(bodyParser.urlencoded({
    extended: true
}));

apiController.get('/api', async (req, res) => {
     let comments = await Comments.find({}, (err, Comments) => {
     res.json(Comments);
     });
     return comments;
});

apiController.post('/api',async (req, res) => {
            let comment = await new Comments(req.body);
            comment.save();                       
            // posting the json
            //res.status(201).send(comment);   
            //redirect to test.ejs page after commit to the database
            res.redirect('test');     
});
module.exports = apiController;