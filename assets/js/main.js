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
// Setting the text content for the highscore, and setting it to be responsive to null values to improve UI
finalScore.textContent = finalScore.textContent =
  "High Score - " +
  localStorage.getItem("userName") +
  ": " +
  localStorage.getItem("userScore");
if (
  localStorage.getItem("userScore") === null &&
  localStorage.getItem("userName") === null
) {
  finalScore.textContent = "High Score: 0";
} else if (
  localStorage.getItem("userScore") === null &&
  localStorage.getItem("userName") === null
) {
  finalScore.textContent = "High Score: 0";
} else if (localStorage.getItem("userName") === null) {
  finalScore.textContent = "High Score: " + localStorage.getItem("userScore");
}

// Adding clear high score button which will clear local storage
clearScores.addEventListener("click", function () {
  localStorage.clear();
  finalScore.textContent = "";
});

// Setting timer, the function of start timer is called when the user clicks the start button
timerDisplay.textContent = 30;
timerDisplay.style.display = "none";
function startTimer() {
  timerDisplay.style.display = "flex";
  var timerInterval = setInterval(function () {
    timerDisplay.textContent -= 1;
    // Setting the timer to stop when the timer is == 0
    if (timerDisplay.textContent == 0 || timerDisplay.textContent < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = 0;
      timerDisplay.style.display = "none";
      console.log(score);
      quizComplete();
      // The below creates a start over button which will refresh the page for the user
      var startOver = document.createElement("button");
      startOver.classList.add("button");
      startOver.textContent = "Start Over";
      pageContent.append(startOver);
      startOver.addEventListener("click", function () {
        document.location.reload();
      });
    }
  }, 1000);
}

function quizComplete() {
  // Setting the timer to stop when all questions are answered so that as above, the timer interval will be cleared just as it would if the timer had ran out
  timerDisplay.textContent = 0;
  // The below if statement checks if the current score is higher than the userScore saved in local storage, or if the score is equal to 0, if it is higher or =0 , then userScore in local
  // storage is updated to be equal to the current score value
  if (
    score > localStorage.getItem("userScore") ||
    localStorage.getItem("userScore") == null
  ) {
    localStorage.setItem("userScore", score);
    scoreArray.push(localStorage.getItem("userScore"));
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
    console.log(localStorage.getItem("scoreArray"));
    // If the user has achieved a high score, or a score of 0 when no other scores were set, the user will have the option to input their name
    // and record their score, if the user does not input a name, the score will be recorded anonymously
    input.style.display = "flex";
    form.style.display = "flex";
    form.classList.add("inputActive");
    submit.addEventListener("click", function (event) {
      event.preventDefault();
      var userName = localStorage.setItem("userName", input.value);
      // Setting the text content of the final score to be responsive to local storage values so that the user can always see the highscore
      finalScore.textContent =
        "High Score - " +
        localStorage.getItem("userName") +
        ": " +
        localStorage.getItem("userScore");
      input.value = "";
    });
  }
  // Below states what should happen if the current score is not higher than the userScore in local storage and is also responsive to null values
  // The below does not need to check is userScore is null, as by default if the
  else if (localStorage.getItem("userName") === null) {
    finalScore.textContent = "High Score: " + localStorage.getItem("userScore");
  } else {
    localStorage.setItem("userScore", score);
    scoreArray.push(localStorage.getItem("userScore"));

    finalScore.textContent =
      "High Score - " +
      localStorage.getItem("userName") +
      ": " +
      localStorage.getItem("userScore");
  }

  // For loop removes question options from the screen when quiz is complete
  for (var i = 0; i < optionArray.length; i++) {
    optionArray[i].style.display = "none";
  }
  // Updates text content when quiz complete
  questionText.textContent = "Game Over!";
}

// Round 5 runs the quiz complete function when the user clicks on one of the options, as well as achieving the same functionality of other rounds in terms
// of correct and incorrect answers, specified below
function fifthRound() {
  for (i = 0; i < question1.options.length; i++) {
    questionText.textContent = question5.questionContent;
    optionArray[i].textContent = question5.options[i];
    optionArray[i].classList.remove(question4.classes[i]);
    optionArray[i].classList.add(question5.classes[i]);
    optionArray[i].addEventListener("click", function (event) {
      // The below if statement resembles that of the functions below, however instead of calling another round, each if statement calls the quizComplete()
      // function
      if (event.currentTarget.classList.contains("incorrect.5")) {
        console.log("incorrect.5");
        timerDisplay.textContent -= 5;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(253, 87, 87)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        quizComplete();
      } else if (event.currentTarget.classList.contains("correct.5")) {
        console.log("correct.5");
        score += 1;
        scoreDisplay.textContent = "Score: " + score;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(50, 205, 109)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        quizComplete();
      }
    });
  }
}

// The fourth round function replicates the third round function as seen below, with updated values

function fourthRound() {
  for (i = 0; i < question1.options.length; i++) {
    questionText.textContent = question4.questionContent;
    optionArray[i].textContent = question4.options[i];
    optionArray[i].classList.remove(question3.classes[i]);
    optionArray[i].classList.add(question4.classes[i]);
    optionArray[i].addEventListener("click", function (event) {
      if (event.currentTarget.classList.contains("incorrect.4")) {
        console.log("incorrect.4");
        timerDisplay.textContent -= 5;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(253, 87, 87)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        fifthRound();
      } else if (event.currentTarget.classList.contains("correct.4")) {
        console.log("correct.4");
        score += 1;
        scoreDisplay.textContent = "Score: " + score;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(50, 205, 109)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        fifthRound();
      }
    });
  }
}

// The third round function replicates the second round function as seen below, with updated values
function thirdRound() {
  for (i = 0; i < question1.options.length; i++) {
    questionText.textContent = question3.questionContent;
    optionArray[i].textContent = question3.options[i];
    optionArray[i].classList.remove(question2.classes[i]);
    optionArray[i].classList.add(question3.classes[i]);
    optionArray[i].addEventListener("click", function (event) {
      if (event.currentTarget.classList.contains("incorrect.3")) {
        console.log("incorrect.3");
        timerDisplay.textContent -= 5;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(253, 87, 87)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        fourthRound();
      } else if (event.currentTarget.classList.contains("correct.3")) {
        console.log("correct.3");
        score += 1;
        scoreDisplay.textContent = "Score: " + score;

        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(50, 205, 109)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        fourthRound();
      }
    });
  }
}

function secondRound() {
  // The below for loop updates the text content of the question and options, and removes the previous correct/incorrect classes and replaces them with those
  // that correspond with round 2,
  for (i = 0; i < question1.options.length; i++) {
    questionText.textContent = question2.questionContent;
    optionArray[i].textContent = question2.options[i];
    optionArray[i].classList.remove(question1.classes[i]);
    optionArray[i].classList.add(question2.classes[i]);
    optionArray[i].addEventListener("click", function (event) {
      // The below if statement replicates that of the first round function
      if (event.currentTarget.classList.contains("incorrect.2")) {
        console.log("incorrect.2");
        timerDisplay.textContent -= 5;
        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(253, 87, 87)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        thirdRound();
      } else if (event.currentTarget.classList.contains("correct.2")) {
        console.log("correct.2");
        score += 1;
        scoreDisplay.textContent = "Score: " + score;
        var incorrectAnswer = setInterval(function () {
          document.body.style.backgroundColor = "rgb(50, 205, 109)";
        }, 1);
        var clearIncorrect = setInterval(function () {
          document.body.style.backgroundColor = "rgb(141, 175, 247)";
          clearInterval(incorrectAnswer);
          clearInterval(clearIncorrect);
        }, 200);

        thirdRound();
      }
    });
  }
}

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
