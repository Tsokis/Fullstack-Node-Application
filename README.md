# Fullstack-Node-Application
Clone the project with git clone   
```npm install```   
cd app/   
make a configuration file  
example config.js on the root app/ structure
```
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3002,
    URL: process.env.BASE_URL || 'http://localhost:3002',
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://<username> <password> /database name>"
}
```
and the import on server.js file
```
const config = require('./config');
```  
Run the server with    
* ```node server.js```
* ```nodemon server.js```

Added mongoDB database,get and post method route,tested for now with postman,client representation,client validation on test,contact page   
You can see the raw json from the database on /api and /api/contact   
In order to search weather you need an appid from openweather api   
For the tv-show search bar you don't need an appid or key in order to search tv shows  
Slowly refactoring the webapp's style with grid css3   [about page and test page]   
```Work on Progress```
