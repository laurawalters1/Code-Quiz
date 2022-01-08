var title = document.getElementById("title");
var startbtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var checkbox1 = document.getElementById("option1");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var checkboxes = document.querySelectorAll(".checkbox");
startbtn.addEventListener("click", function () {
  timer.textContent = 3;
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
