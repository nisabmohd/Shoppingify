const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    usernmae: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: String
})

const userModel = new mongoose.model('users', userSchema)

module.exports = userModel