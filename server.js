//1. dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

////custom modules
var routes = require('./routes');

//2. db connection


//3. app instantiation
var app = express();


//4. app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('cookie-secret-key'));


//5. middleware definition


//6. routes
app.get('/:username/:userid', function(req, res) {
    var username = req.params.username;
    var userid = req.params.userid;
    var queryString = req.query.is;
    console.log(queryString);
    res.send('These are the user parameters: ' + username + ' ' + userid + '. And the query string: ' + JSON.stringify(queryString));
});

app.get('/cookie', function(req, res) {
    if(!req.cookies.counter) {
        res.cookies.counter = 1;
        console.log(res.cookies.couter);
    } else {
        console.log('old req.cookie.counter is: ', req.cookies.counter);
        res.cookies = parseInt(req.cookies.counter, 10) + 1;
        console.log('new req.cookie.counter is: ', req.cookies.counter);
    }
})

app.use('/', routes);


////catch-all route
app.all('*', function(req, res) {
    res.status(404).send('This is the error message for Page Not Found');
});


//7. app server start with host and port
app.listen(3000, function() {
    console.log('the server is listening on port 3000');
});