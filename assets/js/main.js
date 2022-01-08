var title = document.getElementById("title");
var startbtn = document.getElementById("startbtn");
var timer = document.getElementById("timer");
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
});
