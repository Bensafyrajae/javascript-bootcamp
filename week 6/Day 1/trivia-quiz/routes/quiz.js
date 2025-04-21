const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// GET /quiz - Start or continue the quiz
router.get('/', (req, res) => {
  if (!req.session.score && req.session.score !== 0) {
    req.session.score = 0;
    req.session.currentQuestion = 0;
  }

  const current = triviaQuestions[req.session.currentQuestion];

  if (current) {
    res.send(`
      <h3>Question ${req.session.currentQuestion + 1} of ${triviaQuestions.length}</h3>
      <form method="POST" action="/quiz">
        <p>${current.question}</p>
        <input name="answer" required/>
        <button type="submit">Submit</button>
      </form>
    `);
  } else {
    res.redirect('/quiz/score');
  }
});

// POST /quiz - Submit an answer
router.post('/', (req, res) => {
  const { answer } = req.body;
  const currentIndex = req.session.currentQuestion;
  const correctAnswer = triviaQuestions[currentIndex].answer.toLowerCase();

  let feedback;
  if (answer.trim().toLowerCase() === correctAnswer) {
    req.session.score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Incorrect! The correct answer was: ${triviaQuestions[currentIndex].answer}`;
  }

  req.session.currentQuestion++;

  // Add feedback and link to next
  res.send(`
    <h4>${feedback}</h4>
    <a href="/quiz">Next Question</a>
  `);
});

// GET /quiz/score - Final score
router.get('/score', (req, res) => {
  const total = triviaQuestions.length;
  const score = req.session.score || 0;

  // Clear session
  req.session.destroy();

  res.send(`
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score} / ${total}</p>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;
