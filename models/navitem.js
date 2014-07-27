var mongoose = require('mongoose');


var navitemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'New Item'
    },
    url: {
        type: String,
        required: true,
        default: '#'
    }
});

module.exports = mongoose.model('NavItem', navitemSchema);
