const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String
    },
    age: Number,
    score: Number
})

const Usersdb = mongoose.model('users',schema);

module.exports = Usersdb;