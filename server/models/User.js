const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    uploadedImages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    }],
    downloadedImages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
