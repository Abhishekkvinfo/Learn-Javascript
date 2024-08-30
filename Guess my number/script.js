"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;
let displaymessage = function (message) {
  document.querySelector(".correct-number").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const display = Number(document.querySelector(".display").value);
  // when player wins
  if (display === random) {
    displaymessage("🎉 Congratulations YOU WON!! ");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".display").style.backgroundColor = "green";
    document.querySelector(".output").style.width = "20rem";
    document.querySelector(".output").textContent = `${random}`;
    // high score function
    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".high").textContent = `🔥Highscore:${Highscore}`;
    }
    // when there is no input
  } else if (display === 0) {
    displaymessage("⛔️ no number");

    // when its high or low
  } else if (display !== random) {
    if (score > 0) {
      // document.querySelector(".correct-number").textContent =
      displaymessage(display > random ? " 📉 Too high" : "📈 Too low");
      document.querySelector(".score").textContent = `💯Score :${score}`;
      score--;
      document.querySelector("body").style.backgroundColor = "grey";
      document.querySelector(".display").style.backgroundColor = "grey";
    } else {
      displaymessage("😑😑 YOU LOST THE GAME");
    }
  }
});

document.querySelector(".Again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  displaymessage(" 🎮 Start the game");
});
