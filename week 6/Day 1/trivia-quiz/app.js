const express = require('express');
const session = require('express-session');
const quizRouter = require('./routes/quiz');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'quiz-secret',
  resave: false,
  saveUninitialized: true,
}));

app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
  res.send('<h2>Welcome to the Trivia Quiz Game!</h2><a href="/quiz">Start Quiz</a>');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
