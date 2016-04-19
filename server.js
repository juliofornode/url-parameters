//1. dependencies
var express = require('express');

////custom modules
var routes = require('./routes');

//2. db connection


//3. app instantiation
var app = express();

//4. app configuration


//5. middleware definition


//6. routes
app.get('/', function(req, res) {
    res.send('This is a route in server.js');
});

app.use('/', routes);


////catch-all route
app.all('*', function(req, res) {
    res.status(404).send('This is the error message for Page Not Found');
});


//7. app server start with host and port
app.listen(3000, function() {
    console.log('the server is listening on port 3000');
});