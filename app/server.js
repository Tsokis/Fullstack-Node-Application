const express = require('express');
const app = express();
//const path = require('path');
const bodyParser = require('body-parser')

//template engine ejs
app.set('view engine','ejs');
//setting up views folder
app.set('views', 'views');
//use test route
app.use(require('./routes/about'));
app.use(require('./routes/home'));
// link to public folder
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: false
}))

//test render an html file
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname+'/index.html'));
// });

// Run server
app.listen(3002, () => {
    console.log("Server UP!!")
});
