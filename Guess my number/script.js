"use strict";

const random = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const display = Number(document.querySelector(".display").value);
  if (display === random) {
    document.querySelector(".correct-number").textContent =
      "🎉 Congratulations YOU WON!! ";
  } else if (display > random) {
    document.querySelector(".correct-number").textContent = " 📉 Too high";
  } else if (display < random) {
    document.querySelector(".correct-number").textContent = " 📈 Too low";
  }
});
document.querySelector(".output").textContent = `${random}`;
