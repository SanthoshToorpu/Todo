const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://toorpusanthosh:iXN2JV5qz450GJtJ@cluster0.uqzprwt.mongodb.net/');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo : todo,
}

