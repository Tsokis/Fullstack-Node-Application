const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    }    
});

const Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;