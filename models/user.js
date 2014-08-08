var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 11;


var schema = new mongoose.Schema({
   username: {
        type: String,
        required: true
   },
   password: {
        type: String,
        required: true
   },
   role: {
        type: Number,
        required: true,
        default: 0
   }, 
   display: {
        type: String
   }
});

schema.pre('save', function(next){
    var user = this;
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', schema);