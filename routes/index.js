var express = require('express');
var router = express.Router();

router.get('/', function(req, res, nex){
  res.render('index.html');
});

module.exports = router;
