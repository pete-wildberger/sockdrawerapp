var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
console.log('socks get hit');
res.send('argyle');
});//end get

module.exports = router;
