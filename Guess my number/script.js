"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const display = Number(document.querySelector(".display").value);
  // when player wins
  if (display === random) {
    document.querySelector(".correct-number").textContent =
      "🎉 Congratulations YOU WON!! ";
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
    document.querySelector(".correct-number").textContent = "⛔️ no number";

    // when its high
  } else if (display > random) {
    if (score > 0) {
      document.querySelector(".correct-number").textContent = " 📉 Too high";
      document.querySelector(".score").textContent = `💯Score :${score}`;
      score--;
      document.querySelector("body").style.backgroundColor = "grey";
      document.querySelector(".display").style.backgroundColor = "grey";
    } else {
      document.querySelector(".correct-number").textContent =
        "😑😑 YOU LOST THE GAME";
    }

    //when its too low
  } else if (display < random) {
    if (score > 0) {
      document.querySelector(".correct-number").textContent = " 📈 Too low";
      score--;
      document.querySelector(".score").textContent = `💯Score :${score}`;
      document.querySelector("body").style.backgroundColor = "grey";
      document.querySelector(".display").style.backgroundColor = "grey";
    } else {
      document.querySelector(".correct-number").textContent =
        "😑😑 YOU LOST THE GAME";
    }
  }
});

document.querySelector(".Again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "black";
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".correct-number").textContent = " 🎮 Start the game";
  document.querySelector(".high").textContent = "🔥 Highscore : 0";
});
console.log(random);
