const express = require('express');
const app = express();
const io = require("socket.io");
//env vars
const config = require('./config');
//mongoose 
const mongoose = require('mongoose');
//template engine ejs
app.set('view engine','ejs');
//setting up views folder
app.set('views', 'views');
// routes
app.use(require('./routes/about'));
app.use(require('./routes/home'));
app.use(require('./routes/weather'));
app.use(require('./routes/test'));
app.use(require('./routes/tvshows'));
app.use(require('./routes/api'));
app.use(require('./routes/contact'));
app.use(require('./routes/chat'));
// link to public folder
app.use(express.static('./public'));
// Run server
app.listen(config.PORT, () => {
     console.log(`Server is UP on ${config.URL}`);
     mongoose.set('useFindAndModify',false);
     mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true});
});
