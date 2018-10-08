var express = require('express');
var router = express.Router();

router.get('/tasks', function (req, res, nex) {
  res.send('TASKS API');
});

module.exports = router;
