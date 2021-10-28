var express = require('express');
var url = require('url');
var router = express.Router();
const querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  var arg = req.query.value;
  res.send('Exponential applied to:' + arg + "is" + Math.exp(arg));
});

module.exports = router;