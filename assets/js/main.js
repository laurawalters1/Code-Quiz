// Declare variables
var startBtn = document.getElementById("start-quiz");
var header = document.getElementById("header");
var list = document.getElementById("option-list");
var questionText = document.getElementById("question");
var score = 0;
var scoreDisplay = document.getElementById("score");
var input = document.getElementById("input");
var form = document.getElementById("form");
var submit = document.getElementById("submit");
var questions = [
  {
    questionContent: "In HTML, what does the tag ul stand for?",
    options: [
      "uniform-list",
      "unique-list",
      "unordered-list",
      "unstructured-list",
    ],
    // answerIndex: 2,
    classes: ["incorrect.1", "incorrect.1", "correct.1", "incorrect.1"],
  },
  {
    questionContent: "What does CSS stand for?",
    options: [
      "Coding Style Sheet",
      "Cascading Style Sheet",
      "Complex Style Sheet",
      "Complete Style Sheet",
    ],
    // answerIndex: 2,
    classes: ["incorrect.2", "correct.2", "incorrect.2", "incorrect.2"],
  },
  {
    questionContent:
      "Which is the only programming language that can run in the browser?",
    options: ["HTML", "Javascript", "Python", "PHP"],
    // answerIndex: 2,
    classes: ["incorrect.3", "correct.3", "incorrect.3", "incorrect.3"],
  },
  {
    questionContent: "What data type does the value of true have?",
    options: ["String", "Number", "Undefined", "Boolean"],
    // answerIndex: 2,
    classes: ["incorrect.4", "incorrect.4", "incorrect.4", "correct.4"],
  },
  {
    questionContent: "Which bracket type should be used for an array?",
    options: ["Curly", "Parentheses", "Square", "Angled"],
    // answerIndex: 2,
    classes: ["incorrect.5", "incorrect.5", "correct.5", "incorrect.5"],
  },
];
var timer = undefined;
var timerDisplay = document.getElementById("timer-display");
var optionArray = [];
var question1 = questions[0];
var question2 = questions[1];
var question3 = questions[2];
var question4 = questions[3];
var question5 = questions[4];
var pageContent = document.getElementById("content");
var finalScore = document.getElementById("final-score");
var scoreArray = [];
var clearScores = document.getElementById("clearScores");
