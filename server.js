const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
//const test = require('./app/routes/test');

app.set('view engine','ejs');
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
    extended: false
}))

//test render an html file
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'));
});


//test render a view
app.get('/about', function (req, res) {
    res.render(path.join(__dirname + '/app/views/pages/about'));
    //res.render('../app/views/partials/about');
});

//app.use(test);
// Run server
app.listen(3002, () => {
    console.log("Server UP!!")
});
