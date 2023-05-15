const mongoose = require('mongoose');

// Create a schema for quizzes
const quizSchema = new mongoose.Schema({
    quizname: {
        type: String,
        required: true
    },
    questionNumbers: {
        type: Number,
        required: true
    },
    hardness: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('QuizList', quizSchema);