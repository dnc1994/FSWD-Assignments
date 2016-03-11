var express = require('express');
var app = module.exports = express();

app.get('/', function(req, res, next){
    res.end('Will send all the leaders to you!');
});

app.post('/', function(req, res, next){
     res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/', function(req, res, next){
    res.end('Deleting all leaders');
});

app.get('/:leaderId', function(req, res, next){
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
});

app.put('/:leaderId', function(req, res, next){
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/:leaderId', function(req, res, next){
        res.end('Deleting leader: ' + req.params.leaderId);
});
