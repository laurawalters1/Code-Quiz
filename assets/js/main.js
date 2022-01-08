var startbtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
startbtn.addEventListener("click", function () {
  timer.textContent = 5;
  var timerInterval = setInterval(function () {
    timer.textContent -= 1;
    if (timer.textContent == 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});
