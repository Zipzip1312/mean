var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://andrey:andrey1312@ds245680.mlab.com:45680/tasklist', ['tasks']);

router.get('/tasks', function (req, res, nex) {
  db.tasks.find(function(err, tasks){
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
});

module.exports = router;
