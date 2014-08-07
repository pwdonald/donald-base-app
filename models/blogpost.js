var mongoose = require('mongoose');

var BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        default: 'New Blog Post'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String
    },
    tags: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);