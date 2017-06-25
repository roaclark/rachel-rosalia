var express = require('express');
var router = express.Router();

router.get('/jump', function (req, res) {
  res.send('*jumps really high*');
});

router.get('/roll', function (req, res) {
  res.send('*rolls on the ground*');
});

module.exports = router;