var title = document.getElementById("title");
var startbtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var checkbox1 = document.getElementById("option1");
var checkbox2 = document.getElementById("option2");
var checkbox3 = document.getElementById("option3");
var checkbox4 = document.getElementById("option4");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var checkboxes = document.querySelectorAll(".checkbox");
var checkboxes2 = document.querySelectorAll(".checkbox2");
var answers = document.querySelectorAll(".answers");
var answers2 = document.querySelectorAll(".answers2");
var score = document.getElementById("score");
var scoreNum = 0;
startbtn.addEventListener("click", function () {
  timer.textContent = 60;
  var timerInterval = setInterval(function () {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  title.style.display = "none";
  startbtn.style.display = "none";
  question.textContent = "coding question 1";
  answer1.textContent = "answer 1";
  answer2.textContent = "answer 2";
  answer3.textContent = "answer 3";
  answer4.textContent = "answer 4";
  checkbox1.style.display = "inline";
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].style.display = "inline";
  }
});

for (i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function () {
    if (
      checkboxes[1].checked &&
      !checkboxes[0].checked &&
      !checkboxes[2].checked &&
      !checkboxes[3].checked
    ) {
      console.log("correct");
      scoreNum += 1;
      score.textContent = scoreNum;
      question.textContent = "coding question 2";
      console.log(scoreNum);
    } else if (
      checkboxes[0].checked ||
      checkboxes[2].checked ||
      checkboxes[3].checked
    ) {
      console.log("incorrect");
      timer.textContent -= 5;
    }
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].style.display = "none";
      answers[i].style.display = "none";
      checkboxes2[i].style.display = "inline";
      answers2[0].textContent = "answer 2.1";
      answers2[1].textContent = "answer 2.2";
      answers2[2].textContent = "answer 2.3";
      answers2[3].textContent = "answer 2.4";
    }
  });
}

for (i = 0; i < answers2.length; i++) {
  checkboxes2[i].addEventListener("click", function () {
    if (
      checkboxes2[3].checked &&
      !checkboxes2[0].checked &&
      !checkboxes2[2].checked &&
      !checkboxes2[1].checked
    ) {
      console.log("correct");
      scoreNum += 1;
      score.textContent = scoreNum;
      question.textContent = "coding question 2";
      console.log(scoreNum);
    } else if (
      checkboxes2[0].checked ||
      checkboxes2[2].checked ||
      checkboxes2[1].checked
    ) {
      console.log("incorrect");
      timer.textContent -= 5;
    }
  });
}
