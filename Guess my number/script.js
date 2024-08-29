"use strict";

const random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const display = Number(document.querySelector(".display").value);
  if (display === random) {
    document.querySelector(".correct-number").textContent =
      "🎉 Congratulations YOU WON!! ";
  } else if (display === 0) {
    document.querySelector(".correct-number").textContent = "⛔️ no number";
  } else if (display > random) {
    if (score > 0) {
      document.querySelector(".correct-number").textContent = " 📉 Too high";
      document.querySelector(".score").textContent = `💯Score :${score}`;
      score--;
    } else {
      document.querySelector(".correct-number").textContent =
        "😑😑 YOU LOST THE GAME";
    }
  } else if (display < random) {
    if (score > 0) {
      document.querySelector(".correct-number").textContent = " 📈 Too low";
      score--;
      document.querySelector(".score").textContent = `💯Score :${score}`;
    } else {
      document.querySelector(".correct-number").textContent =
        "😑😑 YOU LOST THE GAME";
    }
  }
});
document.querySelector(".output").textContent = `${random}`;
