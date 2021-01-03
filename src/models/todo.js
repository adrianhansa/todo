const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
},{timestapms: true})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo