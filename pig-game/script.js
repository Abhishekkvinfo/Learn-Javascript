"use strict";

//selecting elements
const score0 = document.querySelector("#score1");
const score1 = document.querySelector("#score2");
const dice1 = document.querySelector(".dice");
const btnNew = document.querySelector(".newgame");
const btnRoll = document.querySelector(".roll");
const btnHOLD = document.querySelector(".hold");
const currentscore0 = document.querySelector("#currentscore-0");
const currentscore1 = document.querySelector("#currentscore-1");
const player1storedscore = document.querySelector(".score");
let currentscore = 0;
let activeplayer = 0;
const scores = [0, 0];
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
    document.getElementById(`currentscore-${activeplayer}`).textContent =
      currentscore;
  } else {
    activeplayer = 1;
    currentscore = 0;
    document.getElementsByClassid(`currentscore-${activeplayer}`).textContent =
      currentscore;
  }
});
