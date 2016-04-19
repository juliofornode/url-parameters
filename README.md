## Url parameters (query strings) in Express.js

## Tips for writing the README.md file
[Read github guide here](https://help.github.com/articles/basic-writing-and-formatting-syntax/)


## Basic usage
* We grab the url parameters with req.params.paramName
```
app.get('/user/:username', function(req, res) {
    var username = req.params.username;
    res.send('the username parameter is ' + username);
};
```

## Query strings
* We use req.query to grab the query strings
