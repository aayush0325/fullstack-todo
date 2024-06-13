const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ayush25khanna:WF741KIL62@cluster0.1snhujj.mongodb.net/tododb').then(
    console.log('db connected')
);

const todoSchema = new mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean,
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo,
}