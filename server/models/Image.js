const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ]
});

module.exports = mongoose.model('Image', ImageSchema);
