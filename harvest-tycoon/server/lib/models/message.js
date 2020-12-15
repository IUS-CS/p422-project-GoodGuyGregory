const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;