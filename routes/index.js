var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Donald\'s Base Express App', activeNum: 0 });
});

module.exports = router;
