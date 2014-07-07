var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/new', function(req,res){
    new NavItem({
        title: 'About',
        url: '/About'
    }).save();
    res.render('index', { title: 'New Item Created.'});
});

module.exports = router;
