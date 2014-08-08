var express = require('express'),
    router = express.Router(),
    User = require('../models/user');

router.get('/', function(req,res){
   res.render('register'); 
});

router.post('/', function(req,res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save(function(err, user) {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            res.status(200).json({
                'username': user.username,
                'role': user.role,
                'display': user.display
            });
        }
    });
});

module.exports = router;