var express = require('express');
var myController = require('../controllers/myController');
var myRouter = express.Router();


myRouter.route('/mid-size-project')
    .get(function(req, res) {
        res.send('this is a route for a mid-size project');
    });

myRouter.route('/big-size-project')
    .get(function(req, res) {
        return myController.bigPage(req, res);
    });



module.exports = myRouter;