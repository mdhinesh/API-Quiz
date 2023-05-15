const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  quizName: {
    type: String,
    required: true
  },
  timeLimit: {
    type: Number,
    required: true
  },
  questions: [
    {
      question: {
        type: String,
        required: true
      },
      options: {
        type: [String],
        required: true
      },
      answer: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('QuizData', QuizSchema);