var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: String,
    done: {type: Boolean, default: false}
});

module.exports = Todo;