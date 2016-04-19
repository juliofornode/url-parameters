## Routing alternatives in Express.js

## Tips for writing the README.md file
[Read github guide here](https://help.github.com/articles/basic-writing-and-formatting-syntax/)


## Routing in simple projects
* Define routes in server.js
```
app.get('/', function(req, res) {
    res.send('This is the home page');
};
```


## Routing in mid-size projects
* Add dependency to custom module in server.js
`var routes = require('./routes');`

* Add middleware definition in server.js
`app.use('/', routes);`

* Add routes in ./routes/index.js
```
var express = require('express');
var myRouter = express.Router();

myRouter.route('/')
    .get(function(req, res) {
        res.send('This is the home page of a mid-size project.');
    };

module.exports = myRouter;
```


## Routing in big-size projects
* Add dependency to custom module in server.js
`var routes = require('./routes');`

* Add middleware definition in server.js
`app.use('/', routes);`

* Add routes in ./routes/index.js
```
var express = require('express');
var myController = require('../controllers/myController');
var myRouter = express.Router();

myRouter.route('/')
    .get(function(req, res) {
        return myController.index(req, res);
};

module.exports = myRouter;
```

* Add controller in ./controllers/myController.js
```
exports.index = function(req, res) {
    res.send('This is the home page of a big-size project.');
};
```



