const express = require('express');
const router = express.Router();
const QuizList = require('../models/quizlist');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// post the quizlist to the database
router.post('/', async (req, res) => {

    const quizList = new QuizList(
        {
            _id: new ObjectId(),
            quizname: 'C',
            questionNumbers: 15,
            hardness: 'easy',
            time: 45
        }
    )

    try {
        const newQuiz = await quizList.save();
        res.status(201).json(newQuiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// get the quizlist from the database
router.get('/', async (req, res) => {
    try {
        const quizzes = await QuizList.find();
        res.json(quizzes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    // res.send('quizlist')
});

module.exports = router;