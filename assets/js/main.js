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

// First round function
function firstRound() {
  // For loop causes one button per option from the questions.[i].options array to be created, and assigns each of them a class from the questions[i].classes array
  // this means that the correct answer can be distinguished from the others, these classes will be swapped out in the coming rounds
  for (var i = 0; i < question1.options.length; i++) {
    var listItem = document.createElement("button");
    listItem.textContent = question1.options[i];
    list.appendChild(listItem);
    questionText.textContent = question1.questionContent;
    listItem.classList.add("button");
    listItem.classList.add("question-button");
    listItem.classList.add(question1.classes[i]);
    listItem.value = question1.classes[i];
    optionArray.push(listItem);
    // The below event listener runs a function that will test if the button the user clicked on contains the class of incorrect or correct, and proceed accordingly

    optionArray[i].addEventListener("click", function ifCorrect(event) {
      if (event.currentTarget.classList.contains("incorrect.1")) {
        // If the user is incorrect, the timer will deduct 5 seconds, the screen will turn red after 1ms and will be set back to normal after 200ms
        timerDisplay.textContent -= 5;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(253, 87, 87)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);
        // Then the second round function will be ran
        secondRound();
      } else if (event.currentTarget.classList.contains("correct.1")) {
        // If the user is correct, the value of score will increase by one and the text content of score display will update in accordance with this
        score += 1;
        scoreDisplay.textContent = "Score: " + score;
        // The background will change to green after 1ms and change back after 200ms
        var correctAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(50, 205, 109)";
        }, 1);
        var clearCorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(correctAnswer);
          clearInterval(clearCorrect);
        }, 200);

        secondRound();
      }
    });
  }
}

// When the user hits the start button, the header and start button will disappear, the start timer and first round functions will be ran
startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  header.style.display = "none";
  firstRound();
  startTimer();
});
