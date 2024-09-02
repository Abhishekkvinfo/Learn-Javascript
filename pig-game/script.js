"use strict";

//selecting elements
const score0 = document.querySelector("#score1");
const score1 = document.querySelector("#score2");
const dice1 = document.querySelector(".dice");
const btnNew = document.querySelector(".newgame");
const btnRoll = document.querySelector(".roll");
const btnHOLD = document.querySelector(".hold");
const currentstore = document.querySelector("#currentscore1");
const player1storedscore = document.querySelector(".score");
let currentscore = 0;

//starting conditions

score0.textContent = "0";
score1.textContent = "0";

// rolling dice

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  dice1.classList.remove("hidden");
  dice1.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentscore += dice;
    currentstore.textContent = currentscore;
  } else {
  }
});

btnHOLD.addEventListener("click", function () {
  player1storedscore.textContent = currentscore;
});
