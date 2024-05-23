const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Userdb = mongoose.model('Userdb', schema);

module.exports = Userdb;
