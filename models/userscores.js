const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    useremail: {
        type: String,
        required: true
    },
    quizattended: [
        {
            quizname: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            }
        }
    ],
});

module.exports = mongoose.model('UserScores', QuizSchema);