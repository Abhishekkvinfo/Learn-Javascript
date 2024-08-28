"use strict";

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".check").addEventListener("click", function () {
  const add = Number(document.querySelector(".display").value);
  if (!add) {
    document.querySelector(".correct-number").textContent = "⛔️ No number!";
  } else if (add === number) {
    document.querySelector(".correct-number").textContent = "🎉 YOU won";
  } else if (add > number) {
    document.querySelector(".correct-number").textContent = "📈 Too low";
  } else if (add < number) {
    document.querySelector(".correct-number").textContent = "📉 Too high";
  }
  document.querySelector(".output").textContent = add;
});
