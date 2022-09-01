const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    resetPasswordLink: {
        data: String,
        default: ""
    },
    token: String
})

module.exports = mongoose.model('User', userSchema);