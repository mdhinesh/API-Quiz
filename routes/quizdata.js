const express = require('express');
const router = express.Router();
const QuizData = require('../models/quizdata');

// post the quizdata to the database
router.post('/', async (req, res) => {

    const newQuiz = new QuizData({
        quizName: "C Language",
        timeLimit: 60,
        questions: [
          {
            question: "What is the full form of 'C' in C Language?",
            options: ["Computer", "Control", "Code", "None of the above"],
            answer: 2
          },
          {
            question: "Which of the following is not a valid data type in C Language?",
            options: ["int", "char", "bool", "string"],
            answer: 3
          },
          {
            question: "What is the output of the following code? int a = 5; printf('%d', a++);",
            options: ["5", "6", "undefined", "error"],
            answer: 0
          },
          {
            question: "What is the difference between '++i' and 'i++' operators in C Language?",
            options: ["There is no difference", "'++i' increments before using the variable, 'i++' increments after using the variable", "'i++' increments before using the variable, '++i' increments after using the variable", "Cannot be used with integers"],
            answer: 1
          },
          {
            question: "What is the use of 'malloc()' function in C Language?",
            options: ["Allocate memory", "Deallocate memory", "Print a string", "None of the above"],
            answer: 0
          },
          {
            question: "Which header file is needed to use the 'sqrt()' function in C Language?",
            options: ["<stdlib.h>", "<math.h>", "<stdio.h>", "<time.h>"],
            answer: 1
          },
          {
            question: "What is the keyword used to define a constant in C Language?",
            options: ["#define", "const", "constant", "var"],
            answer: 1
          },
          {
            question: "What is the difference between 'strcpy()' and 'strncpy()' functions in C Language?",
            options: ["There is no difference", "'strcpy()' does not check for buffer overflow, 'strncpy()' checks for buffer overflow", "'strncpy()' does not null-terminate the destination string if the source string is too long, 'strcpy()' null-terminates the destination string if the source string is too long", "Cannot be used with strings"],
            answer: 2
          },
          {
            question: "What is the output of the following code? int i = 0; while (i < 5) { printf('%d', i); i += 2; }",
            options: ["024", "02468", "2468", "246810"],
            answer: 1
          },
          {
            question: "Which of the following operators has the lowest precedence in C Language?",
            options: ["=", "++", "*", "&&"],
            answer: 0
          }
        ]
      });
                                                      
      try {
        const quizData = await newQuiz.save();
        res.status(201).json(quizData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

// get the quizdata from the database
router.get('/', async (req, res) => {
    try {
        const quizdata = await QuizData.find();
        res.json(quizdata);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    // res.send('quizlist')
});

// get the quizdata from the database by quizname
router.get('/:quizname', async (req, res) => {
    try {
        const quizdata = await QuizData.find({quizName: req.params.quizname});
        res.json(quizdata);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    // res.send('quizlist')
});

module.exports = router;

