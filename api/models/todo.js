var mongoose = require('mongoose');

var Todo = mongoose.mode('Todo', {
    text: String,
    done: {type: Boolean, default: false}
});