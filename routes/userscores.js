const express = require('express');
const router = express.Router();
const UserScores = require('../models/userscores');

// post the UserScores to the database
router.post('/', async (req, res) => {

    const newData = new UserScores({
        useremail: req.body.useremail,
        quizattended: [
            {
                quizname: req.body.quizname,
                score: req.body.score
            }
        ]
    });
                                                      
    try {
        const userData = await newData.save();
        res.status(201).json(userData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

// get the UserScores from the database
router.get('/', async (req, res) => {
    try {
        const userscores = await UserScores.find();
        res.json(userscores);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

