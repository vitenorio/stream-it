const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    githubUrl: {
        type: String,
        required: false
    },
    jobPosition: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Users', UserSchema);