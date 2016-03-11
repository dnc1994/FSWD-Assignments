var express = require('express');
var app = module.exports = express();

app.get('/', function(req, res, next){
    res.end('Will send all the dishes to you!');
});

app.post('/', function(req, res, next){
     res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/', function(req, res, next){
    res.end('Deleting all dishes');
});

app.get('/:dishId', function(req, res, next){
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.put('/:dishId', function(req, res, next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/:dishId', function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});
