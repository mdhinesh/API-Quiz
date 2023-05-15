[
    {
      quizname: 'Geography Quiz',
      questionNumbers: 10,
      hardness: 'medium',
      time: 30
    },
    {
      quizname: 'Math Quiz',
      questionNumbers: 20,
      hardness: 'hard',
      time: 60
    },
    {
      quizname: 'History Quiz',
      questionNumbers: 15,
      hardness: 'easy',
      time: 45
    }
  ]

  const quizSchema = new mongoose.Schema({
    name: String,
    description: String,
    questions: [{
      question: String,
      options: [String],
      answer: Number
    }]
  });

  const quiz = new QuizList([
    {
        quizname: 'Javscript basics',
        questionNumbers: 10,
        hardness: 'medium',
        time: 30
    },
    {
        quizname: 'Reactjs',
        questionNumbers: 20,
        hardness: 'hard',
        time: 60
    },
    {
        quizname: 'Expressjs',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'Mongodb',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'Nodejs',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'Angular',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'Python',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'Java',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'C++',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    },
    {
        quizname: 'C',
        questionNumbers: 15,
        hardness: 'easy',
        time: 45
    }
]);
