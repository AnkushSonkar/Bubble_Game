var timerValue = "";
var hitrandom = 0;
var score = 0;
var ans = 0;
var timer = "";

function bubblesmaker(num) {
  var cluster = "";
  for (i = 1; i < num; i++) {
    cluster += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".bcon").innerHTML = cluster;
}

function timeout() {
  // clearInterval(timer);
  timerValue = 60;
  timer = setInterval(() => {
    if (timerValue > 0) {
      timerValue--;
      document.querySelector("#timebox").textContent = timerValue;
    } else {
      clearInterval(timer);
      document.querySelector(
        ".bcon"
      ).innerHTML = `<h2>Game Over! Your Score is ${score}<h2>
      `;
    }
  }, 1000);
}

function ht() {
  hitrandom = Math.floor(Math.random() * 10);
  document.querySelector("#hitcard").textContent = hitrandom;
}

function increasescore() {
  score += 10;
  document.querySelector("#scorecard").textContent = score;
}

const value = document.querySelector(".bcon");
value.addEventListener("click", function (details) {
  ans = Number(details.target.textContent);
  console.log(ans);
  if (hitrandom === ans) {
    increasescore();
    bubblesmaker(172);
    ht();
    timerValue += 2;
  } else {
    console.log("Try Again");
  }
});

const game = document.querySelector(".newgame");
game.addEventListener("click", function () {
  bubblesmaker(172);
  ht();
  clearInterval(timer);
  timeout();
  score = 0;

  document.querySelector("#scorecard").textContent = score;
  document.querySelector("#timebox").textContent = timerValue;
});

const exitGame = document.querySelector(".exitgame");
exitGame.addEventListener("click", function () {
  timerValue = 0;
  document.querySelector("#timebox").textContent = timerValue;
  document.querySelector(
    ".bcon"
  ).innerHTML = `<h2>Game Over! Your Score is ${score}<h2>`;
});

function endGame(message) {
  document.querySelector(".bcon").innerHTML = "<h2>" + message + "</h2>";
}

const startGame = document.querySelector(".startGame");
startGame.addEventListener("click", function () {
  document.querySelector(".bcon").style.display = "flex";
  document.querySelector(".startcon").style.display = "none";
  document.querySelector(".Restart").style.display = "block";
  document.querySelector(".Back").style.display = "block";
  bubblesmaker(172);
  timeout();
  ht();
});
