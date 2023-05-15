require('dotenv').config();

const express = require('express')
const app = express();
var cors = require('cors')

const mongoose = require('mongoose');

// const bodyParser = require('body-parser');
// const cors = require('cors');
// // Use body-parser middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABSE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());
app.use(cors())

const quizlistRouter = require('./routes/quizlist');
app.use('/quizlist', quizlistRouter);

const quizdataRouter = require('./routes/quizdata');
app.use('/quizdata', quizdataRouter);

const userscoresRouter = require('./routes/userscores');
app.use('/userscores', userscoresRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Define a route to store/retrieve the list of quizzes
app.get('/quizzes', async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });  

// Define a route to store/retrieve the quizdata


// Start the server
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);
