const express = require('express');
const apiController = express.Router();
const Comments = require('../models/Comments');
const Contact = require('../models/Contact');
const bodyParser = require('body-parser')

apiController.use(bodyParser.json());
apiController.use(bodyParser.urlencoded({
    extended: true
}));
// get comments
apiController.get('/api', async (req, res) => {
     let comments = await Comments.find({}, (err, Comments) => {
     res.json(Comments);
     });
     return comments;
});
//post comments
apiController.post('/api',async (req, res) => {
     let comment = await new Comments(req.body);
     comment.save();                       
    // posting the json
    //res.status(201).send(comment);   
    //redirect to test.ejs page after commit to the database
    res.redirect('test');     
});

//get contact data
apiController.get('/api/contact', async (req, res) => {
    let contactData = await Contact.find({}, (err, Contact) => {
        res.json(Contact);
    });
    return contactData;
});

//post contact data
apiController.post('/api/contact', async (req, res) => {
    let contact = await new Contact(req.body);    
    contact.save();
    // posting the json
    res.status(201).send(contact);     
});

module.exports = apiController;