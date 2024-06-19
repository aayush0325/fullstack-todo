const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.URL;

mongoose.connect(url).then(
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