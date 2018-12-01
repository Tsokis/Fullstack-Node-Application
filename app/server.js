const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


// Run server
app.listen(3002, () => {
    console.log("Server UP!!")
});
