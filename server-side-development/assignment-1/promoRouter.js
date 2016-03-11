var express = require('express');
var app = module.exports = express();

app.get('/', function(req, res, next){
    res.end('Will send all the promos to you!');
});

app.post('/', function(req, res, next){
     res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/', function(req, res, next){
    res.end('Deleting all promos');
});

app.get('/:promoId', function(req, res, next){
    res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
});

app.put('/:promoId', function(req, res, next){
    res.write('Updating the promo: ' + req.params.promoId + '\n');
    res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/:promoId', function(req, res, next){
        res.end('Deleting promo: ' + req.params.promoId);
});
